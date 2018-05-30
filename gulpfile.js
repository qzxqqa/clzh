let path = require('path');
let gulp = require('gulp');
let less = require('gulp-less');
let autoprefixer = require('gulp-autoprefixer');

const lessPath = path.resolve(__dirname, 'public/less/*.less');
const cssPath = path.resolve(__dirname, 'public/css');

gulp.task('lessToCSS', function() {
    gulp.src(lessPath)
        .pipe(less())         // less to css
        .pipe(autoprefixer({  // autoprefixer
            browers: ['last 2 versions','Safari >0', 'Explorer >0', 'Edge >0', 'Opera >0', 'Firefox >=20'],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest(cssPath))
});

gulp.task('watch', function() {
    gulp.watch(lessPath, ['lessToCSS'])
});

gulp.task('default', function() {
   gulp.run('lessToCSS')
});