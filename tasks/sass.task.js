const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

function toCss() {
    return gulp
        .src("./app/scss/**/*.scss")
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
}

function toMinifiedCss() {
    return gulp
        .src("./app/scss/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(
            rename(function(path) {
                path.dirname = "";
                path.basename += ".min";
            })
        )
        .pipe(gulp.dest("dist/css"));
}

// module.exports = gulp.task("sass", gulp.parallel(toCss, toMinifiedCss));
module.exports = {
    toCss,
    toMinifiedCss
};
