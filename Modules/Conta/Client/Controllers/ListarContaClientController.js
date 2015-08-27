'use strict';

angular.module('Conta').controller('ListarContaClientController', ['$scope', '$http', 'Popup', 'ContaClientModel',
	function($scope, $http, Popup, ContaModel) {
		
		$scope.$watchCollection('Popup.GetParentData()', function (value) {
			$http.get('/api/Account').success(function (response) {
				$scope.Contas = response;
			});
		});

		$http.get('/Modules/Conta/Views/CadastrarConta.html').then(function (response) {
			Popup.SetPopupContent({
				Content: response.data,
				Model: new ContaModel({}),
			});
		});
		
	}
]);