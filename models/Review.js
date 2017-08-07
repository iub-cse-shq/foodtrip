var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = {

  username: {
    type: String,
    default: '',
    trim: true,
    required: 'Username required'
  },
 review_text: {
    type: String,
    default: '',
    trim: true,
    required: 'Review_text required'
  },
  rating: {
    type: Number,
    default: '',
    trim: true,
    required: 'Rating required'
  },


  created: {
    type: Date,
    default: Date.now
  }
}

var Review = mongoose.model('Review', ReviewSchema, 'reviews');
module.exports = Review;
