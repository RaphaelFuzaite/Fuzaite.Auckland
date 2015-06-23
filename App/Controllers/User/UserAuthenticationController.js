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

	user.Provider = 'local';
	user.NomeCompleto = user.PrimeiroNome + ' ' + user.UltimoNome;

	user.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.GetErrorMessage(err)
			});
		} else {
			user.Senha = undefined;
			user.Salt = undefined;

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
			user.Senha = undefined;
			user.Salt = undefined;

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