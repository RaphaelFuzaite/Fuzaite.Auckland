'use strict';

angular.module('Usuario').controller('AutenticacaoClientController', ['$scope', '$http', '$location', 'UsuarioClientModel',
	function($scope, $http, $location, Usuario) {
		$scope.User = new Usuario({});

		if ($scope.User.Authentication.Get()) $location.path('/');

		$scope.isInvalid = function() {
			var Form = $(ApplicationConfiguration.VendorsInitializer.Form.Validation($scope.User.GetRules()));
    		return !Form.form('validate form');
  		};

		$scope.Signup = function() {
			if (this.isInvalid())
				return false;
				
			$http.post('/api/Auth/Signup', $scope.Credenciais).success(function(response) {
				$scope.User.Authentication.Fetch(response);
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.Signin = function() {
			if (this.isInvalid())
				return false;

			$http.post('/api/Auth/Signin', $scope.Credenciais).success(function(response) {
				$scope.User.Authentication.Fetch(response);
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);