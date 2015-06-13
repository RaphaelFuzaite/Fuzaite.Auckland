'use strict';

angular.module('Dashboard').controller('DashboardController', ['$scope',/*, 'Authentication',*/
	function($scope/*, Authentication*/) {
		
		//$scope.authentication = Authentication;
		$scope.Sumario = {
			Efetivado: 4,
			Pendente: 1
		};
	}
]);