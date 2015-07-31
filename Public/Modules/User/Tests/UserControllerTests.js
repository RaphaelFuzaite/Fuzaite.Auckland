'use strict';

(function() {
		
	describe('FAuck - User Controller', function() {
		
		beforeEach(module(ApplicationConfiguration.ModuleName));
		
		var createController,
			scope,
			$httpBackend;

		beforeEach(inject(function ($injector) {
			var $rootScope = $injector.get('$rootScope');
			var $controller = $injector.get('$controller');
			
			$httpBackend = $injector.get('$httpBackend');
			scope = $rootScope.$new();
			createController = function (controller) {
				return $controller(controller, { $scope: scope });	
			};
		}));
		
		afterEach (function () {
	        $httpBackend.verifyNoOutstandingExpectation();
	        $httpBackend.verifyNoOutstandingRequest();
	    });
		
		it('Deve falhar na autenticação', function() {
			var $controller = createController('AutenticacaoController');
			
			$httpBackend.expectPOST('/Auth/Signin').respond(400, {
				'message': 'Faltam as credenciais'
			});
			
			scope.Signin();
			$httpBackend.flush();
			
			 expect(scope.error).toBe('Faltam as credenciais');
			
			 /*authRequestHandler.respond(401, '');
			 $httpBackend.expectGET('/auth.py');
			 var controller = createController();
			 $httpBackend.flush();
			 expect($rootScope.status).toBe('Failed...');*/
		});
		
		/*it('$scope.Sigin() - Deve efetuar o login do usuário na aplicação com dados válidos', inject(function (UserModel) {
			createController('AutenticacaoController');
			*/
		
	});
	
}());