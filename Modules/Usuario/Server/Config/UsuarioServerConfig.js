'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  Usuario = require('mongoose').model('Usuario'),
  path = require('path'),
  config = require(path.resolve('./Config/Config'));

/**
 * Module init function.
 */
module.exports = function (app, db) {
  // Serialize sessions
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize sessions
  passport.deserializeUser(function (id, done) {
    Usuario.findOne({
      _id: id
    }, '-salt -password', function (err, user) {
      done(err, user);
    });
  });

  // Initialize strategies
  config.Utils.GetGlobbedPaths(path.join(__dirname, './Strategies/**/*.js')).forEach(function (strategy) {
    require(path.resolve(strategy))(config);
  });

  // Add passport's middleware
  app.use(passport.initialize());
  app.use(passport.session());
};
