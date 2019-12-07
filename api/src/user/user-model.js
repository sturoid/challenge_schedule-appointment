const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    timezone: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

schema.virtual('id').get(function() {
  return this._id;
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
