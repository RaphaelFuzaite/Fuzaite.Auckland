'use strict';

var _ = require('lodash'),
	errorHandler = require('../ErrorController'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User');

exports.Signup = function(req, res) {
	delete req.body.roles;

	var user = new User(req.body);
	var message = null;

	user.provider = 'local';
	user.displayName = user.firstName + ' ' + user.lastName;

	user.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.GetErrorMessage(err)
			});
		} else {
			user.password = undefined;
			user.salt = undefined;

			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	});
};

exports.Signin = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			res.status(400).send(info);
		} else {
			user.password = undefined;
			user.salt = undefined;

			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	})(req, res, next);
};

exports.Signout = function(req, res) {
	req.logout();
	res.redirect('/');
};