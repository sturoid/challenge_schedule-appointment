if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const { set } = require('date-fns');
const { sample, groupBy } = require('lodash');

const db = require('../config/db');
const User = require('../src/user/user-model');
const Appointment = require('../src/appointment/appointment-model');
const userData = require('./data/users');

// TODO: Check overlapping appts on a coach and change them.
// function checkConflicts(appts) {
//   const grouped = groupBy(appts, 'coach.id');
//   console.log(grouped);
// }

async function createAppointments() {
  try {
    const users = await User.find({});
    const coaches = users.filter(u => u.roles.some(r => r.name === 'coach'));

    const appts = Array(10)
      .fill()
      .map(() => {
        const hours = sample(
          Array(22)
            .fill()
            .map((_, i) => i + 1)
        );

        const minutes = sample([0, 30]);

        const startTime = { hours, minutes, seconds: 0, milliseconds: 0 };
        const endTime = {
          hours: startTime.minutes === 0 ? startTime.hours : startTime.hours + 1,
          minutes: startTime.minutes === 0 ? 30 : 0,
          seconds: 0,
          milliseconds: 0
        };

        let appointment = {
          start: set(new Date(), { ...startTime }),
          end: set(new Date(), { ...endTime }),
          user: users[0],
          coach: sample(coaches)
        };

        return appointment;
      });

    return Appointment.create(appts);
  } catch (e) {
    console.log(e);
  }
}

// Clean up database.
async function cleanup() {
  console.log('Removing old data');
  return Promise.all([User.deleteMany({}), Appointment.deleteMany({})]);
}

// Create records.
async function create() {
  console.log('Creating users...');
  await User.create(userData);
  console.log('Creating appointments...');
  await createAppointments();
}

// Run seeds.
(async function run() {
  try {
    await cleanup();
    await create();
    db.disconnect();
  } catch (e) {
    console.log('ERROR: ', e);
  } finally {
    console.log('Done');
  }
})();

module.exports = { checkConflicts };
