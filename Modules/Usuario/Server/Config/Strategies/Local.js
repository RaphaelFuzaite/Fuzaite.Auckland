'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  Usuario = require('mongoose').model('Usuario');

module.exports = function () {
  // Use local strategy
  passport.use(new LocalStrategy({
      usernameField: 'NomeDeUsuario',
      passwordField: 'Senha'
    },
    function (username, password, done) {
      Usuario.findOne({
        NomeDeUsuario: username
      }, function (err, user) {
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
