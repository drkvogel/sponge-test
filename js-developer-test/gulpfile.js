var gulp = require('gulp');
var sass = require('gulp-sass');

// 'styles' task - compile sass
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// default task - watch and compile sass
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
