'use strict';

var Conta = require('../Controllers/ContaServerController'),
	Policy = require('../Policies/ContaServerPolicy');

module.exports = function(app) {
		
	app.route('/Api/Account').get(Conta.List);
	app.route('/Api/Account/Create').all(Policy.IsAllowed).post(Conta.Create);
	app.route('/Api/Account/Category').get(Conta.ListCategory);
	
};