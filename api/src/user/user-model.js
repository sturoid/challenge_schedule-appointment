const mongoose = require('mongoose');
const { isCoach } = require('./user-methods');
const { USER_ROLES } = require('./user-consts');

const userRoleSchema = new mongoose.Schema(
  { name: { type: String, enum: [USER_ROLES['coach']] } },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    timezone: {
      type: String,
      required: true
    },
    roles: {
      type: [userRoleSchema],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.methods.isCoach = function() {
  return isCoach(this);
};

userSchema.virtual('id').get(function() {
  return this._id;
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
