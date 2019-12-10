const mongoose = require('mongoose');
const {
  Schema: {
    Types: { ObjectId }
  }
} = mongoose;

const schema = new mongoose.Schema(
  {
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },
    user: {
      type: ObjectId,
      ref: 'User'
    },
    coach: {
      type: ObjectId,
      ref: 'User'
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

module.exports = mongoose.model('Appointment', schema);
