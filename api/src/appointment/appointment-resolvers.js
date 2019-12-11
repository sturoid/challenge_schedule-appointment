const Appointment = require('./appointment-model');
const User = require('../user/user-model');
const { utcToZonedTime } = require('date-fns-tz');

module.exports = {
  Query: {
    appointment: (_, { id }) => Appointment.findById(id),
    appointments: (_, { ...args }) => Appointment.find(args)
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
