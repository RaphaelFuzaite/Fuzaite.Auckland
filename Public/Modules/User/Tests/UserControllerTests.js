'use strict';

(function() {
	
	describe('FAuck - User Controller', function() {
		
		beforeEach(module(ApplicationConfiguration.ModuleName));
		
		var createController,
			scope;

		beforeEach(inject(function ($injector) {
			var $rootScope = $injector.get('$rootScope');
			var $controller = $injector.get('$controller');
			
			scope = $rootScope.$new();
			createController = function (controller) {
				return $controller(controller, { $scope: scope });	
			};
		}));

		it('Deve dizer Olá Mundo!', function () {
			createController('TestController');
			expect(scope.HelloWorld).toEqual('Olá Mundo!');
		});
		
		/*it('$scope.Sigin() - Deve efetuar o login do usuário na aplicação com dados válidos', inject(function (UserModel) {
			createController('AutenticacaoController');
			
			var postData = new UserModel({
				
			}); 
		}));*/
		
	});
	
}());