'use strict';

angular.module('Base').directive('layoutHeader', ['Menus', function(Menus) {
		return {
			restrict: 'A',
			templateUrl: '/Modules/Base/Templates/Header.html',
			controller: ['$scope', function ($scope) {
				
				$scope.Authentication = {};
				
				$scope.AlternarModoDoMenu = function () {
					Menus.ChangeMenuState('Sidebar');	
				}
			}]
		};
	}
]);

angular.module('Base').directive('layoutNavigationBar', ['Authentication','Menus', function(Authentication, Menus) {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: '/Modules/Base/Templates/NavigationBar.html',
			controller: ['$scope', function ($scope) {
				
				$scope.Authentication = Authentication;

				$scope.Usuario = {
					Nome: 'Raphael Fuzaite',
					Descricao: 'Web Developer',
					Imagem: 'elliot.jpg'
				};
				
				Menus.AddMenuItem('Sidebar', 'Dashboard', 'Dashboard', 'bar chart');
				Menus.AddMenuItem('Sidebar', 'Contas', 'Contas', 'university');
				Menus.AddMenuItem('Sidebar', 'Projetos', 'Projetos', 'rocket');
				Menus.AddMenuItem('Sidebar', 'Opções', 'Opcoes', 'options');

				$scope.Menus = Menus.GetMenu('Sidebar');

			}]
		};
	}
]);