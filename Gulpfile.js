var gulp          = require('gulp');


// utilities
var plumber       = require('gulp-plumber');


// css and js
var jshint        = require('gulp-jshint');


// browsersync
var browserSync   = require('browser-sync').create();


// JSHint
gulp.task('jshint', function() {
  return gulp.src('app/scripts/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



// BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    files: ['app/templates/**/*.html', 'app/scripts/**/*.js'],
    proxy: "http://localhost:5000",
    port:5001
  });

  gulp.watch('app/scripts/**/*.js', ['jshint']);
  gulp.watch("app/*.html").on('change', browserSync.reload);

});



// Default task
gulp.task('default', ['browser-sync']);
