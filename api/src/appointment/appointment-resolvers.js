const Appointment = require('./appointment-model');
const User = require('../user/user-model');
const { addMinutes } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');

module.exports = {
  Query: {
    appointment: (_, { id }) => Appointment.findById(id),
    appointments: (_, { ...args }) => Appointment.find(args)
  },
  Mutation: {
    addAppointment: (_, { input: { start, coachId } }, { me }) => {
      const now = new Date(start);
      const startIso = now.toISOString();
      const endIso = addMinutes(now, 30).toISOString();
      return Appointment.create({
        start: startIso,
        end: endIso,
        coach: coachId,
        user: me.id
      });
    }
  },
  Appointment: {
    user: appt => User.findById(appt.user),
    coach: appt => User.findById(appt.coach),
    start: ({ start }, { inTimezone }, { me: { timezone } }) => {
      return inTimezone ? utcToZonedTime(start, timezone) : start;
    },
    end: ({ end }, { inTimezone }, { me: { timezone } }) => {
      return inTimezone ? utcToZonedTime(end, timezone) : end;
    }
  }
};
