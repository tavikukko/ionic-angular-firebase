var gulp = require('gulp');

gulp.task('app', function() {
  var htmlSrc = './www/**/*.*',
      htmlDst = '/usr/local/openresty/nginx/html';

  gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlDst));
});

gulp.task('conf', function() {
  var htmlSrc = './conf/**/*.*',
      htmlDst = '/usr/local/openresty/nginx/conf';

  gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlDst));
});

// default gulp task
gulp.task('watchtask', ['app'], function() {
  gulp.watch('./www/**/*.*',['app']);
});
