'use strict';

angular.module('Base').directive('header', ['Menus', function(Menus) {
		return {
			restrict: 'A',
			templateUrl: '/Modules/Base/Templates/Header.html',
			controller: ['$scope', function ($scope) {
				$scope.AlternarModoDoMenu = function () {
					Menus.ChangeMenuState("Sidebar");	
				}
			}]
		};
	}
]);