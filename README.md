# gulp
bower and gulp tested .. gulp worked fine ..

##gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var sass2 = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('sass',function(){
    return gulp.src('./bower_components/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/inc/css'));
});

gulp.task('sass2',function(){
    return gulp.src('./dev/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/inc/css'));
});


gulp.task('watch',function(){
    gulp.watch('./dev/scss/**/*.scss', [sass2]);
    gulp.watch('./bower_components/bootstrap/scss/**/*.scss', [sass]);
});
