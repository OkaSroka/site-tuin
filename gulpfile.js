var gulp = require('gulp'); // wczytanie gulpa
var sass = require('gulp-sass'); // wczytanie gulp sassa
var watch = require('gulp-watch');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var jslint = require('gulp-jslint');
var sassLint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');
//var myStylelintFormatter = require('my-stylelint-formatter');

var scssPatch = 'sass/**/*.scss';
var jsPatch = ['js/vendors/**/*.js','js/**/*.js'];

var styleConfig = {
    options: {
        configFile: '.sass-lint.yml'
    }
} //konfiguruje mi ilość spacji po enterze na 4, standardowo jest 2

gulp.task('scripts', function() {  
    return gulp.src(jsPatch)
        .pipe(concat('all.js'))
        /*.pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks']
        }))*/
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('styles', function() { // definiowanie zadania o nazwie "styles"
    gulp.src(scssPatch) // komenda wyszukująca pliki || /**/ szuka dowolnych folderów || *.scss - dowolny plik z rozszerzeniem SCSS.
        .pipe(sass().on('error', sass.logError)) // przekazuje znalezione pliki do skryptu sass.
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./public//css/')) // wynik końcowy zapisuje do folderu /css/ , nazwa pliku taka sama jak nazwa pliku scss.
});

gulp.task('lintjs', function () {
    return gulp.src(jsPatch.concat(['!js/vendors/**/*.js']))
            .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
            .pipe(jslint.reporter('stylish', {}));
});

gulp.task('lint-css', function lintCssTask() {0

  return gulp.src([scssPatch, '!sass/vendors/**/*.scss'])
    .pipe(sassLint(styleConfig))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('watch', function () { // definiowanie zadania o nazwie "watch"
    return watch(scssPatch, function () {
        gulp.start('styles');
    });
    // tworzymy czujkę, która nasłuchuje zmianę w plikach. Po zmianie, wywoła zadanie "styles". UWAGA! standardowy watch nie wychwytuje tworzenia plików!
});

gulp.task('watch-js', function () { // definiowanie zadania o nazwie "watch"
    return watch(jsPatch, function () {
        gulp.start('scripts');
    });
    // tworzymy czujkę, która nasłuchuje zmianę w plikach. Po zmianie, wywoła zadanie "styles". UWAGA! standardowy watch nie wychwytuje tworzenia plików!
});

gulp.task('watch-lint-sass', function () {
    return watch(scssPatch)
        .pipe(sassLint(styleConfig))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task('watch-lint-js', function () {
    return watch(jsPatch.concat(['!js/vendors/**/*.js']))
        .pipe(jslint())
        .pipe(jslint.reporter('stylish', {}));
});

gulp.task('watch-lint', ['lint-css', 'lintjs', 'watch-lint-sass', 'watch-lint-js']);

gulp.task('lint',['lintjs', 'lint-css']);

//Watch task
gulp.task('default', ['styles', 'watch', 'scripts', 'watch-js']); // definiowanie zadania o nazwie "default". To zadanie jest uruchamiane domyślnie przy komendzie "gulp"
// Zadanie Defualt odpala dwa inne zadania -> "styles" i "watch"
