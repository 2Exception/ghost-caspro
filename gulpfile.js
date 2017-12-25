var gulp = require('gulp');

// gulp plugins and utils

var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');


gulp.task('build', ['css'], function (/* cb */) {
   console.log('building...');
});

gulp.task('css', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];

    return gulp.src('assets/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
});


gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
