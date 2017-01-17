var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var cssnano = require('cssnano');
var precss = require('precss');
var concat = require('gulp-concat');

var source = 'process/css/';
var dest = 'builds/';


var jsSources = [
  'process/scripts/jquery-3.1.1.min.js',
  'process/scripts/script.js'
];

gulp.task('html', function() {
    gulp.src(dest + '*.html');
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .on('error', gutil.log)
    .pipe(gulp.dest(dest));
});
          
gulp.task('css', function() {
    gulp.src(source + 'style.css')
    .pipe(postcss([
        autoprefixer(),
        precss(),
        cssnano()
    ]))
    .on('error', gutil.log)
    .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', function(){
    gulp.watch(source + '**/*.css', ['css']); 
    gulp.watch(dest + '**/*.html', ['html']);
    gulp.watch(jsSources, ['js']);
});

gulp.task('webserver', function () {
    gulp.src(dest)
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['html', 'css', 'js', 'webserver', 'watch']);