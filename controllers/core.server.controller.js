'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/project.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.place = function(req, res) {
	res.render('./../public/views/place.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};
