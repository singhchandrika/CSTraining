// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 // Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
	.pipe(uglify().on('error', function(e){
            console.log(e);
	}))
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
 // Default Task
gulp.task('default', ['scripts']);