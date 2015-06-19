'use strict';
var _ = require('lodash');

module.exports = _.extend(
	require('./User/UserAuthenticationController'),
	require('./User/UserAuthorizationController'),
	require('./User/UserPasswordController'),
	require('./User/UserProfileController')
);	