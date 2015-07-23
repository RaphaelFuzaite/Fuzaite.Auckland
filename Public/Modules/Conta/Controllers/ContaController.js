'use strict';

angular.module('Conta').controller('ContaController', ['$scope', '$http', 'Popup', 'ContaModel',
	function($scope, $http, Popup, ContaModel) {

		$http.get('/Modules/Conta/Views/ContasCadastro.html').then(function (response) {
			Popup.SetPopupContent({
				Content: response.data,
				Model: new ContaModel({}),
			});
		});
		
	}
]);