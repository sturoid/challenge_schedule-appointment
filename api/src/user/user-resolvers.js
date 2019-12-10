const User = require('./user-model');
const Appointment = require('../appointment/appointment-model');

module.exports = {
  Query: {
    user: (_, { id }) => User.findById(id)
  },
  User: {
    appointments: user => {
      const coachOrClient = user.isCoach() ? 'coach' : 'user';
      return Appointment.find({ [coachOrClient]: user._id });
    }
  }
};
