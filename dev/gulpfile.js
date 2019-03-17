// gulpfile.js
const gulp = require("gulp");

const paths = {
  src: "source/patterns/**/*.twig",
  dist: "../templates/patterns"
};

gulp.task("twig", () => {
  return gulp.src(paths.src).pipe(gulp.dest(paths.dist));
});

gulp.task("watch", ["twig"], () => {
  gulp.watch(paths.src, ["twig"]);
});

gulp.task("default", ["watch"]);
