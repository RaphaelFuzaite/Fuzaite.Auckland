'use strict';

(function() {
		
	describe('FAuck - User Controller', function() {
		
		beforeEach(function () {
			browser().navigateTo('/#!/');
		});
		
		 it('Dever funcionar a rota para Login', function() {
		    browser().navigateTo('/Acessar');
    		expect(browser().location().url()).toBe("/#!/Acessar");
		  });
		
	});
	
}());