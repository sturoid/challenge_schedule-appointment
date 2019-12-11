const { merge } = require('lodash');

const UserResolvers = require('../user/user-resolvers');
const AppointmentResolvers = require('../appointment/appointment-resolvers');

module.exports = merge(UserResolvers, AppointmentResolvers);
