'use strict';

var path = require('path'),
	errorHandler = require(path.resolve('./Modules/Base/Server/Controllers/ErrorServerController')),
	mongoose = require('mongoose'),
	Conta = mongoose.model('Conta'),
	_ = require('lodash');

exports.Create = function(req, res) {
	var conta = new Conta(req.body);
	conta.User = req.user._id;

	conta.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(conta);
		}
	});
};

/*exports.Update = function(req, res) {
	var conta = req.Conta;

	conta = _.extend(conta, req.body);

	conta.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(conta);
		}
	});
};*/

exports.List = function(req, res) {
	Conta.find().sort('-Criacao').populate('User', 'NomeCompleto').populate('CategoriaDeConta', 'Nome').exec(function(err, contas) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(contas);
		}
	});
};