'use strict';

angular.module('Base').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$urlRouterProvider.otherwise('NotFound');

		$stateProvider
		.state('Inicio', {
			url: '/',
			templateUrl: 'Modules/Base/Views/HomeBaseClientView.html',
			data: {
				Titulo: 'Fuzaite Auckland',
				Subtitulo: 'Gerenciamento Financeiro',
				ncyBreadcrumbLabel: '<i class="home icon"></i> Início'
  			},
			ncyBreadcrumb: {
				label: 'Início'
			}
		})
		.state('NotFound', {
        	url: '/NotFound',
        	templateUrl: 'Modules/Base/Views/404BaseClientView.html'
      	});
	}
]).config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication', 'Messaging',
			function($q, $location, Authentication, Messaging) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.RemoveUser();

								// Redirect to signin page
								$location.path('Acessar');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}
						
						Messaging.CompleteDisclaimer(rejection.status, rejection.data);

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]).config(['$breadcrumbProvider',function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
		templateUrl: '/Modules/Base/Templates/Breadcrumb.html'
    });
}]).run(['Authentication', function (Authentication) {
    //Authentication.FetchUser();
}]).run(function($rootScope) {
	$rootScope.$on('$stateChangeStart', function() {
		console.log('Carregando...');
	});
	
	$rootScope.$on('$stateChangeSuccess', function() {
		console.log('Carregado...');
	});
});