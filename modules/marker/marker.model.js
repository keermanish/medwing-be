const mongoose = require('mongoose');

// marker schema
const MarkerSchema = new mongoose.Schema({
  'lat': {
    'type': Number,
    'required': [true, 'Lat can not be empty']
  },
  'lng': {
    'type': Number,
    'required': [true, 'lng can not be empty']
  }
});

// maker model
const Markers = mongoose.model('Markers', MarkerSchema);

module.exports = Markers;
