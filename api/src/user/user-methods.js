const { USER_ROLES } = require('./user-consts');

function isCoach({ roles }) {
  return roles.some(r => r.name === USER_ROLES['coach']);
}

module.exports = { isCoach };
