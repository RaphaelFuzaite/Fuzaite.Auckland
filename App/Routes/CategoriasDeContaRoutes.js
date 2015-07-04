'use strict';

var CategoriasDeConta = require('../../App/Controllers/CategoriasDeContaController');

module.exports = function(app) {
	app.route('/Account/Category').get(CategoriasDeConta.List);
};