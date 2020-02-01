const gulp = require("gulp");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

function toBabelAndUglify() {
    return gulp
        .src("app/js/**/*.js")
        .pipe(
            babel({
                presets: ["@babel/env"]
            })
        )
        .pipe(uglify())
        .pipe(
            rename(function(path) {
                path.dirname = "";
                path.basename += ".min";
            })
        )
        .pipe(gulp.dest("dist/js"));
}

module.exports = {
    toBabelAndUglify
};
