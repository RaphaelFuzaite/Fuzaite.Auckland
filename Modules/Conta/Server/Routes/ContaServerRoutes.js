'use strict';

var Conta = require('../Controllers/ContaServerController')/*,
	Policy = require('../Policies/ContaServerPolicy')*/;

module.exports = function(app) {
		
	app.route('/Account').get(Conta.List);
	/*app.route('/api/Account/Create').all(Policy.IsAllowed).post(Conta.Create);
		
	app.route('/api/Account/Category').get(Conta.ListCategory);*/
	
};