'use strict';

var errorHandler = require('./ErrorController'),
	mongoose = require('mongoose'),
	CategoriasDeConta = mongoose.model('CategoriasDeConta');
	
exports.List = function(req, res) {
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