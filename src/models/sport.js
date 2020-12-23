const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  playersPerTeam: {
    type: Number,
    required: false
  }
});

const Sport = mongoose.model('Sport', sportsSchema);

module.exports = Sport;