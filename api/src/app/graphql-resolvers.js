const merge = require('lodash.merge');

const UserResolvers = require('../user/user-resolvers');
const AppointmentResolvers = require('../appointment/appointment-resolvers');

module.exports = merge(UserResolvers, AppointmentResolvers);
