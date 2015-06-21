'use strict';

angular.module('User').controller('AutenticacaoController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		var Form = $(ApplicationConfiguration.VendorsInitializer.Form.Validation($scope.authentication.Model));

		if ($scope.authentication.User) $location.path('/');

		$scope.isInvalid = function() {
    		return !Form.form('validate form');
  		};

  		$scope.Register = function() {
  			if (!this.isInvalid()) {
  				console.log("INVÁLIDO");
    		} else {
    			console.log("VÁLIDO");
    		}
  		}

		$scope.signup = function() {
			$http.post('/Auth/Signup', $scope.Credenciais).success(function(response) {
				$scope.authentication.User = response;
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/Auth/Signin', $scope.Credentials).success(function(response) {
				$scope.authentication.user = response;
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);