var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

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

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
