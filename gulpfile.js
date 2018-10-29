var gulp = require("gulp");
var htmlbeautify = require("gulp-html-beautify");
var markdown = require("gulp-breakdance");
var rename = require("gulp-rename");

gulp.task("normal", () => {
  gulp
    .src("./docs/gen/*.html")
    .pipe(
      htmlbeautify({
        preserve_newlines: false
      })
    )
    .pipe(gulp.dest("./docs/gen/"));
});
gulp.task("tomd", () => {
  gulp
    .src("./docs/gen/*.html")
    .pipe(markdown())
    .pipe(rename({ extname: ".md" }))
    .pipe(gulp.dest("./docs/"));
});
