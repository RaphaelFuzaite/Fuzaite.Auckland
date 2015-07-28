'use strict';

angular.module('User').controller('AutenticacaoController', ['$scope', '$http', '$location', 'UserModel',
	function($scope, $http, $location, User) {
		$scope.User = new User();

		var Form = $(ApplicationConfiguration.VendorsInitializer.Form.Validation($scope.User.GetRules()));

		if ($scope.User.Authentication.Get()) $location.path('/');

		$scope.isInvalid = function() {
    		return !Form.form('validate form');
  		};

		$scope.Signup = function() {
			if (this.isInvalid())
				return false;
				
			$http.post('/Auth/Signup', $scope.Credenciais).success(function(response) {
				$scope.User.Authentication.Fetch(response);
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.Signin = function() {
			if (this.isInvalid())
				return false;

			$http.post('/Auth/Signin', $scope.Credenciais).success(function(response) {
				$scope.User.Authentication.Fetch(response);
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);