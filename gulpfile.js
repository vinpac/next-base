const fs = require('fs')
const gulp = require('gulp')
const stylus = require('gulp-stylus')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssFilters = require('postcss-filters')
const postcssSelectorNot = require('postcss-selector-not')

const prod = process.env.NODE_ENV === 'production'
let buildId

if (!prod) {
  try {
    buildId = fs.readFileSync('./STATIC_DIRNAME')
  } catch (error) {
    // ...
  }
}

if (!buildId) {
  buildId = String(Date.now())
}

const compileCSS = () =>
  gulp
    .src('./src/styles/global/_index.styl')
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
    .pipe(gulp.dest(`./public/_dist/${buildId}/`))

gulp.task('css', ['css/clean', 'write-static-dirname'], compileCSS)
gulp.task('css/clean', () => gulp.src('./public/_dist', { read: false }).pipe(clean()))
gulp.task('css/compile', compileCSS)
gulp.task('css/watch', ['css/compile', 'write-static-dirname'], () =>
  gulp.watch('./src/styles/**/*.styl', ['css/compile']),
)

gulp.task('write-static-dirname', callback => fs.writeFile('STATIC_DIRNAME', buildId, callback))
gulp.task('default', ['css'])
