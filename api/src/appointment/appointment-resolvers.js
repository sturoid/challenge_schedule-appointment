const Appointment = require('./appointment-model');
const User = require('../user/user-model');

module.exports = {
  Query: {
    appointment: (_, { id }) => Appointment.findById(id),
    appointments: (_, { ...args }) => Appointment.find(args)
  },
  Appointment: {
    user: appt => User.findById(appt.user),
    coach: appt => User.findById(appt.coach)
  }
};
