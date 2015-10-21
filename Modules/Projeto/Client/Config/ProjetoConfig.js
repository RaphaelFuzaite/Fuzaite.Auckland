'use strict';
angular.module('Projeto').config(['$stateProvider', function($stateProvider) {
		
		$stateProvider.state('Projeto', {
			url: '/Projetos',
			templateUrl: 'Modules/Projeto/Views/ProjetosListar.html',
			data: {
				Titulo: 'Projetos',
				Subtitulo: 'Planejamentos registrados',
			},
			ncyBreadcrumb: {
				parent: 'Inicio',
				label: 'Projetos'
  			}
		});
	}
]);