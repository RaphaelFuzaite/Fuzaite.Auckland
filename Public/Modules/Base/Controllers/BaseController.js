'use strict';

angular.module('Base').run(function($timeout) {
	$timeout(function() {
		ApplicationConfiguration.VendorsInitializer.Form.Element();
		ApplicationConfiguration.VendorsInitializer.Layout.Element();
	},100);
}).controller('BaseController', ['$scope',
	function($scope) {
		
	}
]);