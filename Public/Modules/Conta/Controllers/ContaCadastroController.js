'use strict';

angular.module('Conta').controller('ContaCadastroController', ['$scope', '$http', 'Modal', 'Loader',
	function($scope, $http, Modal, Loader) {
		
		$scope.FormLoad = Loader.FormLoad;
		
		$http.get('/Account/Category').success(function (response) {
			$scope.CategoriasDeConta = response;
		});
		
		$scope.Enviar = function () {
			
		};
	}
]);