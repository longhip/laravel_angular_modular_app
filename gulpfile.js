var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', ['serve']);

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch(['app/*.js'], reload);
    gulp.watch(['modules/**/*.js'], reload);
    gulp.watch(['modules/**/*.html'], reload);
    gulp.watch(['modules/**/*.css'], reload);
});