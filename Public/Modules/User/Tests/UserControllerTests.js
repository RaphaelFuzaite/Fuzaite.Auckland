'use strict';

(function() {
	
	describe('TestController', function() {
		
		beforeEach(module(ApplicationConfiguration.ModuleName));
		
		var TestController,
			scope;
			
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			TestController = $controller('TestController', {
				$scope: scope
			});
		}));
		
		it('Dizer Olá Mundo!', function () {
			expect(scope.HelloWorld).toEqual('Olá Mundo!');
		});
		
	});
	
}());