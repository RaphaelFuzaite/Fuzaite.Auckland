'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

var validateLocalStrategyProperty = function(property) {
	return ((this.Provider !== 'local' && !this.Atualizacao) || property.length);
};

var validateLocalStrategyPassword = function(password) {
	return (this.Provider !== 'local' || (password && password.length > 6));
};

var UserSchema = new Schema({
	PrimeiroNome: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Por favor qual é o seu primeiro nome?']
	},
	UltimoNome: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Nos diga o seu último nome?']
	},
	NomeCompleto: {
		type: String,
		trim: true
	},
	Email: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Um email para contato, por favor'],
		match: [/.+\@.+\..+/, 'Mas precisamos de um email válido']
	},
	NomeDeUsuario: {
		type: String,
		unique: 'Já temos um usuário com esse nome, tente outro',
		required: 'Como deseja ser identificado?',
		trim: true
	},
	Senha: {
		type: String,
		default: '',
		validate: [validateLocalStrategyPassword, 'Tente uma senha mais complexa']
	},
	Salt: {
		type: String
	},
	Provider: {
		type: String,
		required: 'Provider é obrigatório'
	},
	Roles: {
		type: [{
			type: String,
			enum: ['user', 'admin', 'owner', 'shared']
		}],
		default: ['user']
	},
	Atualizacao: {
		type: Date
	},
	Criacao: {
		type: Date,
		default: Date.now
	},
	TokenDeRedefinicaoDeSenha: {
		type: String
	},
	DataLimiteParaRedefinicaoDeSenha: {
		type: Date
	}
});

UserSchema.pre('save', function(next) {
	if (this.Senha && this.Senha.length > 6) {
		this.Salt = crypto.randomBytes(16).toString('base64');
		this.Senha = this.HashPassword(this.Senha);
	}

	next();
});

UserSchema.methods.HashPassword = function(password) {
	if (this.Salt && password) {
		return crypto.pbkdf2Sync(password, new Buffer(this.Salt, 'base64'), 10000, 64).toString('base64');
	} else {
		return password;
	}
};

UserSchema.methods.Authenticate = function(password) {
	return this.Senha === this.HashPassword(password);
};

UserSchema.statics.FindUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne({
		NomeDeUsuario: possibleUsername
	}, function(err, user) {
		if (!err) {
			if (!user) {
				callback(possibleUsername);
			} else {
				return _this.FindUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

mongoose.model('User', UserSchema);