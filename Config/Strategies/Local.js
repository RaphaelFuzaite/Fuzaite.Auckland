'use strict';

var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {

	passport.use(new LocalStrategy({
			usernameField: 'NomeDeUsuario',
			passwordField: 'Senha'
		},
		function(username, password, done) {
			User.findOne({ 
				NomeDeUsuario: username 
			}, function(err, user) {
				if (err) { 
					return done(err); 
				}
				if (!user) {
					return done(null, false, { message: 'Usuário incorreto.' });
				}
				if (!user.Authenticate(password)) {
					return done(null, false, { message: 'Senha incorreta.' });
				}
				return done(null, user);
			});
		}
	));

};