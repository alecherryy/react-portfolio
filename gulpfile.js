var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer')

// gulp.task('sass', function() {
//   return gulp.src('./scss/*.scss')
//   .pipe(sass())
//   .pipe(gulp.dest('./css'))
// });

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./css'))
});

gulp.task('autoprefixer', function() {
  return gulp.src('./css/*.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css'))
});

// gulp.task('watch', ['browserSync', 'sass'], function (){
//   gulp.watch('./scss/*.scss', ['sass']); 
//   // Other watchers
// });
// gulp.task('watch', gulp.series(['sass']));

// gulp.task('watch', function(){
//   gulp.watch('./scss/**/*.scss', function() {
//     gulp.series(['sass', 'autoprefixer'])
//   }); 

//   // Other watchers
// });

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.registry().get('sass'));
})

gulp.task('watch', function () {
  // gulp.watch('./scss/**/*.scss', gulp.registry().get('sass'));
  gulp.watch('./scss/**/*.scss', gulp.series(['sass', 'autoprefixer']));
})

gulp.task('default', function() {
  gulp.task('watch');
});