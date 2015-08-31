'use strict';


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContaSchema = new Schema({
	Criacao: {
		type: Date,
		default: Date.now
	},
	Atualizacao: {
		type: Date,
		default: ''
	},
	Nome: {
		type: String,
		default: '',
		trim: true,
		required: 'Informe um nome para esta conta'
	},
	Descricao: {
		type: String,
		default: '',
		trim: true
	},
	Cor: {
		type: String,
		default: '',
		trim: true
	},
	Saldo: {
		type: Number,
		default: 0
	},
	CategoriaDeConta: {
		type: Schema.ObjectId,
		ref: 'CategoriasDeConta'
	},
	Usuario: {
		type: Schema.ObjectId,
		ref: 'Usuario'
	}
});

mongoose.model('Conta', ContaSchema);