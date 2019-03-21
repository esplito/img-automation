var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");

function images(cb) {
  [320, 480, 768, 1024, 1920, 2560].forEach(function (size) {
    gulp.src('originals/*.{jpg,jpeg,png}')
      .pipe(imageResize({ width: size }))
      .pipe(rename(function (path) { path.basename = `${path.basename}@${size}w`; }))
      .pipe(imagemin())
      .pipe(gulp.dest('resized-images/'))
  });
  cb();
}

exports.resize = images;