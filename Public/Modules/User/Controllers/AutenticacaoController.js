'use strict';

angular.module('User').controller('AutenticacaoController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		var Form = $(ApplicationConfiguration.VendorsInitializer.Form.Validation($scope.authentication.Model));

		if ($scope.authentication.User) $location.path('/');

		$scope.isInvalid = function() {
    		return !Form.form('validate form');
  		};

		$scope.Signup = function() {
			//if (this.isInvalid())
			//	return false;
				
			$http.post('/Auth/Signup', $scope.Credenciais).success(function(response) {
				console.log(response);
				$scope.authentication.User = response;
				//$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.Signin = function() {
			$http.post('/Auth/Signin', $scope.Credentials).success(function(response) {
				$scope.authentication.user = response;
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);