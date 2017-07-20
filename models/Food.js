var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

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
  places:[],

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
