'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

var validateLocalStrategyPassword = function(password) {
	return (this.provider !== 'local' || (password && password.length > 6));
};

var UserSchema = new Schema({
	primeiroNome: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Por favor qual é o seu primeiro nome?']
	},
	ultimoNome: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Nos diga o seu último nome?']
	},
	nomeCompleto: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Um email para contato, por favor'],
		match: [/.+\@.+\..+/, 'Mas precisamos de um email válido']
	},
	nomeDeUsuario: {
		type: String,
		unique: 'Já temos um usuário com esse nome, tente outro',
		required: 'Como deseja ser identificado?',
		trim: true
	},
	senha: {
		type: String,
		default: '',
		validate: [validateLocalStrategyPassword, 'Tente uma senha mais complexa']
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	roles: {
		type: [{
			type: String,
			enum: ['user', 'admin', 'owner', 'shared']
		}],
		default: ['user']
	},
	atualizacao: {
		type: Date
	},
	criacao: {
		type: Date,
		default: Date.now
	},
	tokenDeRedefinicaoDeSenha: {
		type: String
	},
	dataLimiteParaRedefinicaoDeSenha: {
		type: Date
	}
});

UserSchema.pre('save', function(next) {
	if (this.password && this.password.length > 6) {
		this.salt = crypto.randomBytes(16).toString('base64');
		this.password = this.HashPassword(this.password);
	}

	next();
});

UserSchema.methods.HashPassword = function(password) {
	if (this.salt && password) {
		return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
	} else {
		return password;
	}
};

UserSchema.methods.Authenticate = function(password) {
	return this.password === this.HashPassword(password);
};

UserSchema.statics.FindUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne({
		username: possibleUsername
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