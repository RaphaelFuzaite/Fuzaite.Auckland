'use strict';


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContaSchema = new Schema({
	Criacao: {
		type: Date,
		default: Date.now
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
	CategoriaDeConta: {
		type: Schema.ObjectId,
		ref: 'CategoriasDeConta'
	}
});

mongoose.model('Conta', ContaSchema);