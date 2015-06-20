'use strict';

module.exports ={
	DB: {
		URI: 'mongodb://localhost/auckland-dev',
		Options: {
			user: '',
			pass: ''
		},
	},
	App: {
		Title: '[Development] | Gerenciador Financeiro de Projetos'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};