const mongoose = require('mongoose');

const USER_ROLES = {
  coach: 'coach'
};

Object.freeze(USER_ROLES);

const roleSchema = new mongoose.Schema(
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
      type: [roleSchema],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.virtual('id').get(function() {
  return this._id;
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
