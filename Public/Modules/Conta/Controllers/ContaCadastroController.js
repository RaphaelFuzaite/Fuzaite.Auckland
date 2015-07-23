'use strict';

angular.module('Conta').controller('ContaCadastroController', ['$scope', '$http', 'ContaModel', 'Loader',
	function($scope, $http, ContaModel, Loader) {

		$scope.Conta = new ContaModel({});

		$scope.Form = {
			Loading: Loader.FormLoad
		};
		
		$http.get('/Account/Category').success(function (response) {
			$scope.CategoriasDeConta = response;
		});
		
		$scope.Enviar = function () {
			
		};
	}
]);