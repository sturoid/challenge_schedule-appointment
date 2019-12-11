const User = require('../user/user-model');

// Create context object that will be available on each GraphQL resolver.
async function context() {
  // TODO: Normally this would be the signed in user.
  const me = await User.findOne({ name: 'Stuart Clove' });
  return { me };
}

module.exports = context;
