'use strict';

angular.module('Conta').controller('HomeContasClientController', ['$scope', '$http', 'Popup', 'ContaClientModel',
	function($scope, $http, Popup, ContaModel) {
		
		$http.get('/api/Account').success(function (response) {
			$scope.Contas = response;
		});
		
	}
]);