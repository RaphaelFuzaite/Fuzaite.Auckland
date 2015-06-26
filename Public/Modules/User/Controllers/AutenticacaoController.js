'use strict';

angular.module('User').controller('AutenticacaoController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.Authentication = Authentication;

		//var Form = $(ApplicationConfiguration.VendorsInitializer.Form.Validation($scope.Authentication.Model));

		if ($scope.Authentication.User) $location.path('/');

		$scope.isInvalid = function() {
    		return false//!Form.form('validate form');
  		};

		$scope.Signup = function() {
			if (this.isInvalid())
				return false;
				
			$http.post('/Auth/Signup', $scope.Credenciais).success(function(response) {
				$scope.Authentication.User = response;
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.Signin = function() {
			if (this.isInvalid())
				return false;

			$http.post('/Auth/Signin', $scope.Credenciais).success(function(response) {
				$scope.Authentication.User = response;
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);