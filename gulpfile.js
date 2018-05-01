const fs = require('fs')
const gulp = require('gulp')
const stylus = require('gulp-stylus')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssFilters = require('postcss-filters')
const postcssSelectorNot = require('postcss-selector-not')

const buildId = String(Date.now())
const prod = process.env.NODE_ENV === 'production'

const compileCSS = () =>
  gulp
    .src('./src/styles/index.styl')
    .pipe(
      stylus({
        compress: prod,
      }),
    )
    .pipe(
      postcss([
        postcssFilters(),
        postcssSelectorNot(),
        postcssFlexbugsFixes(),
        autoprefixer({ browses: ['last 2 versions'] }),
      ]),
    )
    .pipe(gulp.dest(`./public/d/${buildId}/`))

gulp.task('css', ['css/clean', 'write-static-dirname'], compileCSS)
gulp.task('css/clean', () => gulp.src('./public/d', { read: false }).pipe(clean()))
gulp.task('css/compile', compileCSS)
gulp.task('css/watch', ['css/compile', 'write-static-dirname'], () =>
  gulp.watch('./src/styles/*', ['css/compile']),
)

gulp.task('write-static-dirname', callback => fs.writeFile('STATIC_DIRNAME', buildId, callback))
gulp.task('default', ['css'])
