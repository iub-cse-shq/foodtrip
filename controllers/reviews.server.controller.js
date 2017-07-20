var mongoose = require('mongoose');
var Review = require('./../models/Review.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Review.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var review = new Review(req.body);
  review.user = req.user;
  review.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.review);
};


exports.delete = function(req, res) {
	var review = req.review;
	review.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(review);
		}
	});
};


module.exports.update = function(req, res) {
  var review = req.review;

  	review = _.extend(review, req.body);

  	review.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(review);
  		}
  	});
};

exports.reviewByID = function(req, res, next, id) {
	Review.findById(id).populate('user', 'email').exec(function(err, review) {
		if (err) return next(err);
		if (!review) return next(new Error('Failed to load review ' + id));
		req.review = review;
		next();
	});
};
