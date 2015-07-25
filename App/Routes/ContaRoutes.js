'use strict';

var Conta = require('../../App/Controllers/ContaController'),
	User = require('../../App/Controllers/UserController');

module.exports = function(app) {
	
	app.route('/Account').get(Conta.List);
	app.route('/Account/Create').post(User.RequiresLogin, Conta.Create);

};