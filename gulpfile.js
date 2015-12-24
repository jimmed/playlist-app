var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', ['build-dev']);
gulp.task('build-dev', ['transform-code', 'copy-assets']);

gulp.task('transform-code', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-assets', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});
