const User = require('./user-model');
const Appointment = require('../appointment/appointment-model');
const { USER_ROLES } = require('./user-consts');

module.exports = {
  Query: {
    me: (_, __, { me }) => me,
    user: (_, { id }) => User.findById(id),
    users: () => User.find({}),
    coaches: () => User.find({ 'roles.name': USER_ROLES['coach'] })
  },
  User: {
    appointments: user => {
      const coachOrClient = user.isCoach() ? 'coach' : 'user';
      return Appointment.find({ [coachOrClient]: user._id });
    }
  }
};
