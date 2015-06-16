'use strict';

angular.module('User').factory('Authentication', ['$window', function($window) {
	var Auth = {
		User: $window.user
	};
	
	return Auth;
}]);