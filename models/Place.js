var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlaceSchema = {

  image: {
    type: String,
    default: '',
    trim: true,
    required: 'Image required'

  },
  division: {
    type: String,
    default: '',
    trim: true,
    required: 'Division required'
  },
  district: {
    type: String,
    default: '',
    trim: true,
    required: 'District required'
  },
  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Place = mongoose.model('Place', PlaceSchema, 'places');
module.exports = Place;
