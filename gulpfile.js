'use strict';

var gulp = require('gulp');

var watchFiles = {
	serverViews: ['App/Views/**/*.*'],
	serverJS: ['gulpfile.js', 'server.js', 'Config/**/*.js', 'App/**/*.js', '!App/tests/'],
	clientViews: ['Public/Modules/**Views/**/*.html'],
	clientJS: ['Public/*.js', 'Public/Modules/**/*.js'],
	clientCSS: ['Public/Style/*.css','Public/Modules/**/*.css'],
	allJS: function() {
		return watchFiles.clientJS.concat(watchFiles.serverJS);
	},
	allViews: function() {
		return watchFiles.clientViews.concat(watchFiles.serverViews);
	},
	allCSS: function() {
		return watchFiles.clientCSS;
	}
};

var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('loadConfig', function() {
	require('./Config/Init')();
	require('./Config/Config');
});

gulp.task('jslint', function () {
  return gulp.src(watchFiles.allJS())
		    .pipe(plugins.jshint('.jshintrc'))
			.pipe(plugins.jshint.reporter('default'))
			.pipe(plugins.livereload());
});

gulp.task('csslint', function () {
  return gulp.src(watchFiles.allCSS())
		    .pipe(plugins.csslint('.csslintrc'))
			.pipe(plugins.csslint.reporter())
			.pipe(plugins.livereload());
});

gulp.task('lint', function () {
	gulp.run('jslint', 'csslint');
});

gulp.task('start', function () {
	plugins.nodemon({
		script: 'server.js',
		ext: 'js html',
	});
});

gulp.task('watch', function () {
	plugins.livereload.listen();
	gulp.watch(watchFiles.allJS(), ['jslint']);
	gulp.watch(watchFiles.allCSS(), ['csslint']);
});

gulp.task('default', ['loadConfig', 'lint', 'start', 'watch']);

gulp.task('test', ['loadConfig', 'lint']);