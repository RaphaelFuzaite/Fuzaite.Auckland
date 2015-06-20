'use strict';

var _ = require('lodash'),
	errorHandler = require('../ErrorController.js'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User');

exports.Update = function(req, res) {
	var user = req.user;
	var message = null;

	delete req.body.roles;

	if (user) {
		user = _.extend(user, req.body);
		user.updated = Date.now();
		user.displayName = user.firstName + ' ' + user.lastName;

		user.save(function(err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				req.login(user, function(err) {
					if (err) {
						res.status(400).send(err);
					} else {
						res.json(user);
					}
				});
			}
		});
	} else {
		res.status(400).send({
			message: 'Você não está conectado'
		});
	}
};

exports.Me = function(req, res) {
	res.json(req.user || null);
};