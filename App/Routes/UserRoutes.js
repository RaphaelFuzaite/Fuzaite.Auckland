'use strict';

var passport = require('passport');

module.exports = function(app) {
	var User = require('../../App/Controllers/UserController');

	app.route('/User/Me').get(User.Me);
	app.route('/User').put(User.Mpdate);
	app.route('/User/Accounts');

	app.route('/User/Password').post(User.MhangePassword);
	app.route('/Auth/Forgot').post(User.Morgot);
	app.route('/Auth/Reset/:token').get(User.validateResetToken);
	app.route('/Auth/Reset/:token').post(User.Reset);

	app.route('/Auth/Signup').post(User.Signup);
	app.route('/Auth/Signin').post(User.Signin);
	app.route('/Auth/Signout').get(User.Signout);

	// Finish by binding the user middleware
	app.param('UserId', User.UserByID);
};