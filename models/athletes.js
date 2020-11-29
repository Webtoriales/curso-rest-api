const mongoose = require('mongoose');

const athletesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: false,
  },
  retired: {
    type: Boolean,
    required: false,
  },
  sports: [{
    type: mongoose.Types.ObjectId,
    ref: 'Sport',
    required: true,
  }]
});

const Athlete = mongoose.model('Athlete', athletesSchema);

module.exports = Athlete;