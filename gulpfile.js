var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['build']);
});

gulp.task('build', function() {
    gulp.src('./*.scss')
        .pipe(sass())
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/scss'))
        .pipe(cleancss())
        .pipe(autoprefixer({
            browsers: 'last 3 versions'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/scss'))
});

gulp.task('tools', function() {
    gulp.src('tools/**/*.scss')
        .pipe(sass())
        .pipe(csscomb())
        .pipe(cleancss())
        .pipe(autoprefixer({
            browsers: 'last 3 versions'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(function(file) {
          return file.base;
        }))
});

gulp.task('default', ['build']);
