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
    .pipe(jshint.reporter('default'))
    .pipe(browserSync.reload({ stream:true }));
});


// BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
      server: {
          baseDir: "app"
      },
      port: 5000
  });
});



// Watch for file changes
gulp.task('watch', function() {
  gulp.watch('app/scripts/**/*.js', ['jshint']);
  gulp.watch("app/**/*.html").on('change', browserSync.reload);
});



// Default task
gulp.task('default', ['watch', 'browser-sync']);
