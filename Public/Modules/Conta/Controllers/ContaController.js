'use strict';

angular.module('Conta').controller('ContaController', ['$scope', '$http', 'Modal',
	function($scope, $http, Modal) {

		$http.get('/Modules/Conta/Views/ContasCadastro.html').then(function (response) {
			Modal.SetModalContent({
				Title: "Adicione sua conta",
				Content: response.data,
				Size: 'P',
			});
		});
		
	}
]);