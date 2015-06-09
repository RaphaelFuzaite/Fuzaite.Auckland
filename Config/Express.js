'use strict';

var http 			= require('http'),
	express 		= require('express'),
	bodyParser 		= require('body-parser'),
	session 		= require('express-session'),
	compression 	= require('compression'),
	methodOverride 	= require('method-override'),
	cookieParser 	= require('cookie-parser'),
	helmet 			= require('helmet'),
	passport 		= require('passport'),	
	mongoStore		= require('connect-mongo'),
	consolidate 	= require('consolidate'),
	Config 			= require('./Config'),
	path 			= require('path');
	
module.exports = function (db) {
	
	var app = express();	
	
	app.locals.title = Config.App.Title;
	app.locals.description = Config.App.Description;
	app.locals.keywords = Config.App.Keywords;
	app.locals.jsFiles = Config.GetJavaScriptAssets();
	app.locals.cssFiles = Config.GetCSSAssets();
	
	app.engine('server.view.html', consolidate[Config.TemplateEngine]);
	
	app.set('view engine', 'server.view.html');
	app.set('views', './App/Views');
	app.set('showStackError', true);
	
	if (process.env.NODE_ENV === 'development') {
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.locals.cache = 'memory';
	}
	
	app.use(function(req, res, next) {
		res.locals.url = req.protocol + '://' + req.headers.host + req.url;
		next();
	});
	app.use(compression({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 3
	}));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.use(helmet.ienoopen());
	app.disable('x-powered-by');
	app.use(express.static(path.resolve('./Public')));
	app.use(cookieParser());
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: Config.sessionSecret,
		store: new mongoStore({
			db: db.connection.db,
			collection: Config.SessionCollection
		}),
		cookie: Config.SessionCookie,
		name: Config.SessionName
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(function(err, req, res, next) {
		if (!err) return next();

		console.error(err.stack);

		res.status(500).render('500', {
			error: err.stack
		});
	});
	app.use(function(req, res) {
		res.status(404).render('404', {
			url: req.originalUrl,
			error: 'Not Found'
		});
	});	
	
	Config.GetGlobbedFiles('./App/Models/**/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath));
	});
	
	Config.GetGlobbedFiles('./App/Routes/**/*.js').forEach(function(routePath) {
		require(path.resolve(routePath))(app);
	});
	
	return app;
	
};
	
	
	
	
	