const gulp = require("gulp");
const pug = require("gulp-pug");
const rename = require("gulp-rename");

function toHTML() {
    return gulp
        .src("./app/pug/index.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("app"));
}

function toMinifiedHTML() {
    return gulp
        .src("./app/pug/index.pug")
        .pipe(pug())
        .pipe(
            rename(function(path) {
                path.dirname = "";
            })
        )
        .pipe(gulp.dest("dist"));
}

// module.exports = gulp.task("pug", gulp.parallel(toHTML, toMinifiedHTML));
module.exports = {
    toHTML,
    toMinifiedHTML
};
