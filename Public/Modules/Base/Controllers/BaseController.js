'use strict';

angular.module('Base').run(function($timeout) {
	$timeout(function() {
		ApplicationConfiguration.VendorsInitializer();
	},1000, false);
}).controller('BaseController', ['$scope',
	function($scope) {
		
	}
]);