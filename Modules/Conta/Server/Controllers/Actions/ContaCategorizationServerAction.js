'use strict';

var path = require('path'),
	errorHandler = require(path.resolve('./Modules/Base/Server/Controllers/ErrorServerController')),
	mongoose = require('mongoose'),
	CategoriasDeConta = mongoose.model('CategoriasDeConta');
	
exports.ListCategory = function(req, res) {
	CategoriasDeConta.find().exec(function(err, categorias) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(categorias);
		}
	});
};