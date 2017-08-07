var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FoodSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  image: {
    type: String,
    default: '',
    trim: true,
    required: 'Image required'

  },
   description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'
  },
  
   ratings: {
    type: Number,
    default: '',
    trim: true,
    required: 'ratings required'
  },
  places:[String],

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Food = mongoose.model('Food', FoodSchema, 'foods');
module.exports = Food;
