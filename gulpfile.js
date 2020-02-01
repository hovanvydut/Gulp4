const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const sassTask = require("./tasks/sass.task");
const pugTask = require("./tasks/pug.task");
const jsTask = require("./tasks/js.task");

const task = gulp.task;
const watch = gulp.watch;
const series = gulp.series;
const parellel = gulp.parallel;
const reload = browserSync.reload;

const paths = {
    sass: ["app/scss/**/*.scss"],
    pug: ["app/pug/**/*.pug"],
    html: ["app/**/*.html"],
    js: ["app/js/**/*.js"]
};

task("serve", function() {
    browserSync.init({
        server: "./app"
    });
    watch(paths.sass, { ignoreInitial: false }).on(
        "change",
        series(sassTask.toCss, sassTask.toMinifiedCss, reload)
    );
    watch(paths.pug, { ignoreInitial: false }).on(
        "change",
        series(pugTask.toHTML, pugTask.toMinifiedHTML, reload)
    );
    watch(paths.js, { ignoreInitial: false }).on(
        "change",
        series(jsTask.toBabelAndUglify, reload)
    );
    watch([...paths.sass, ...paths.pug, ...paths.js, ...paths.html], reload);
});
