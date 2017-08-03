const config = require('./gulp/config');

const gulp   = require('gulp');
const concat = require('gulp-concat');
const less   = require('gulp-less');
const bsync  = require('browser-sync');

gulp.task('js', () => {
    gulp.src(config.js.src)
    .pipe(concat(config.js.out))
    .pipe(gulp.dest(config.less.dest));
});

gulp.task('js-watch', ['js'], (done) => {
    bsync.reload();
    done();
})

gulp.task('less', () => {
    gulp.src(config.less.src)
    .pipe(less())
    .pipe(concat(config.less.out))
    .pipe(gulp.dest(config.less.dest))
    .pipe(bsync.stream());
});

gulp.task('serve', ['js', 'less'], () => {
    bsync.init({
        server: 'app'
    });

    gulp.watch(config.js.watch, ['js-watch']);
    gulp.watch(config.less.watch, ['less']);
    gulp.watch(config.html.watch).on('change', bsync.reload);
});


