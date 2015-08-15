'use strict';


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CategoriasDeContaSchema = new Schema({
	Nome: {
		type: String,
		default: '',
		trim: true,
		required: 'Informe um nome para esta categoria'
	},
	Status: {
		type: Boolean,
		default: false
	}
});

mongoose.model('CategoriasDeConta', CategoriasDeContaSchema);