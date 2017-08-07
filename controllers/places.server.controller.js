var mongoose = require('mongoose');
var Place = require('./../models/Place.js');
var Food = require('./../models/Food.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Place.find(function(err, data) {
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
  var place = new Place(req.body);
  place.user = req.user;
  place.save(function(err, data) {
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
  res.json(req.place);
};


exports.delete = function(req, res) {
	var place = req.place;
	place.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(place);
		}
	});
};


module.exports.update = function(req, res) {
  var place = req.place;

  	place = _.extend(place, req.body);

  	place.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(place);
  		}
  	});
};

exports.new = function(req, res) {
	res.render('./../public/views/place/create.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.edit = function(req, res) {
	res.render('./../public/views/place/edit.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.view = function(req, res) {
    Food.find({places: req.place.district}, function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.render('./../public/views/place/view.ejs', {
    		user: req.user || null,
    		request: req,
    		food: data
    	});
    }
  });
  
};

exports.all = function(req, res) {
  Place.find(function(err, data) {
    if (err) {
      return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
    } else {
      console.log("api called");
      console.log(data);

      res.render('./../public/views/place/list.ejs', {
    		user: req.user || null,
    		request: req,
        places: data
    	});
    }
  });

};

exports.placeByID = function(req, res, next, id) {
	Place.findById(id).populate('user', 'email').exec(function(err, place) {
		if (err) return next(err);
		if (!place) return next(new Error('Failed to load place ' + id));
		req.place = place;
		next();
	});
};
