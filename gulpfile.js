var gulp = require('gulp');
var sass = require('gulp-sass');
var sass2 = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('sass',function(){
    return gulp.src('./bower_components/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('sass2',function(){
    return gulp.src('./app/assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/css'));
});


gulp.task('watch',function(){
    gulp.watch('./app/assets/scss/**/*.scss', [sass2]);
    gulp.watch('./bower_components/bootstrap/scss/**/*.scss', [sass]);
});

// -- this kind of sequence setps ['sass', 'sass2'] may not work better with watch task, as it run once ..
// gulp.task('watch', ['sass', 'sass2'], function(){
// //   console.log('done!');
// });

gulp.task('default', ['sass', 'sass2'], function(){
  console.log('done!');
});
