var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    cp          = require('child_process'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano     = require('gulp-cssnano'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    ghPages     = require('gulp-gh-pages');
// var browserify = require('gulp-browserify');
    // autoprefixer = require('gulp-autoprefixer');

// var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
    jekyllDev: 'Running: $ jekyll build for dev',
    jekyllProd: 'Running: $ jekyll build for prod'
};

// Build the Jekyll Site in development mode
gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);
  return cp.spawn('jekyll', ['build', '--drafts', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
 .on('close', done);
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
    browserSync.reload();
});

// Wait for jekyll-dev task to complete, then launch the Server
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-dev'], function() {
  browserSync.init({
    server: "_site",
    port: 3000
  });
});

// Compile files from _js/lib folder into both _site/js folder (for live injecting) and site folder (for future Jekyll builds)
gulp.task('scripts', function() {
  return gulp.src(['_js/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('_site/js'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('js'));
});

// Compile files from _scss folder into both _site/css folder (for live injecting) and site folder (for future Jekyll builds)
gulp.task('sass', function () {
  return gulp.src('_sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('_site/css'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_sass/*.scss', ['sass']);
    gulp.watch('_js/*.js', ['scripts']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

// Build the Jekyll Site in production mode
gulp.task('jekyll-prod', function (done) {
  browserSync.notify(messages.jekyllProd);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('close', done);
});

// Identical Sass compilation task to development mode, with an additional minification step thrown in using cssnano
gulp.task('sass-prod', function () {
  return gulp.src('_sass/main.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssnano())
  .pipe(gulp.dest('_site/css'))
  .pipe(gulp.dest('css'));
});

// Identical Javascript compilation task to development mode, with an additional minification step thrown in using uglify
gulp.task('scripts-prod', function() {
  return gulp.src(['_js/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('_site/js'))
  .pipe(gulp.dest('_js'));;
});

/**
 * Deploy to gh-pages
 */
gulp.task('deploy', ['jekyll-build'], function() {
    return gulp.src('./_site/**/*')
        .pipe(ghPages());
});

// Dev
gulp.task('default', ['browser-sync', 'watch']);

// Production
gulp.task('build', ['scripts-prod', 'sass-prod', 'jekyll-prod']);
