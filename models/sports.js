const mongoose = require('mongooose');

const sportsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  playersPerTeam: {
    type: Number,
    required: false
  }
});

const Sport = mongoose.model('Sport', sportsSchema);

module.exports = Sports;