'use strict';

angular.module('Conta').controller('ListarContasClientController', ['$scope', '$http',
	function($scope, $http) {
		
		$http.get('/api/Account').success(function (response) {
			$scope.Contas = response;
		});
		
	}
]);