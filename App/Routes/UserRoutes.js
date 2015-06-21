'use strict';

var passport = require('passport');

module.exports = function(app) {
	var User = require('../../App/Controllers/UserController');

	app.route('/User/Me').get(User.Me);
	app.route('/User').put(User.Update);
	app.route('/User/Accounts');

	app.route('/User/Password').post(User.ChangePassword);
	app.route('/Auth/Forgot').post(User.Forgot);
	app.route('/Auth/Reset/:token').get(User.ValidateResetToken);
	app.route('/Auth/Reset/:token').post(User.Reset);

	app.route('/Auth/Signup').post(User.Signup);
	app.route('/Auth/Signin').post(User.Signin);
	app.route('/Auth/Signout').get(User.Signout);

	app.param('UserId', User.UserByID);
};