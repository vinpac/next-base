const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const gulp = require('gulp')
const babel = require('gulp-babel')
const stylus = require('gulp-stylus')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssFilters = require('postcss-filters')
const postcssSelectorNot = require('postcss-selector-not')
const sourcemaps = require('gulp-sourcemaps')
const babelConfig = require('./.babelrc.server.json')

const serverFiles = ['src/lib/**/*.js', 'src/core/**/*.js', 'src/server/**/*.js']
const staticDirname = path.join('dist', 'static')
const env = process.env.NODE_ENV || 'development'
const prod = env === 'production'
let buildId = String(Date.now())

const compileCSS = () =>
  gulp
    .src('./src/styles/global/_index.styl')
    .pipe(sourcemaps.init())
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
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.join(staticDirname, 'out', buildId)))

gulp.task('clean', () =>
  gulp.src(['dist/*', '!dist/{static,static/**}'], { read: false }).pipe(clean()),
)
gulp.task('css', ['css/clean', 'ensure-output'], compileCSS)
gulp.task('css/clean', () =>
  gulp.src(path.join(staticDirname, 'out'), { read: false }).pipe(clean()),
)
gulp.task('css/compile', compileCSS)
gulp.task('css/watch', ['css/compile', 'ensure-output'], () =>
  gulp.watch('./src/styles/**/*.styl', ['css/compile']),
)

gulp.task('ensure-output', callback => {
  const metaFilepath = path.join(staticDirname, 'meta.json')
  fs.readFile(metaFilepath, 'utf8', (error, body) => {
    if (!error) {
      try {
        const json = JSON.parse(body)
        if (json.env === env && env !== 'production') {
          buildId = json.value
          callback(null, true)
          return
        }
      } catch (jsonParsingError) {
        // ...
      }
    }

    mkdirp(staticDirname, mkdirpError => {
      if (mkdirpError) {
        callback(mkdirpError)
        return
      }

      fs.writeFile(
        metaFilepath,
        JSON.stringify(
          {
            env,
            value: buildId,
          },
          undefined,
          2,
        ),
        callback,
      )
    })
  })
})

gulp.task('server', ['clean'], () =>
  Promise.all([
    gulp.src(serverFiles.map(f => `${f}on`), { base: './src' }).pipe(gulp.dest('dist')),
    gulp
      .src(serverFiles, { base: './src' })
      .pipe(babel(babelConfig))
      .pipe(gulp.dest('dist')),
  ]),
)

gulp.task('default', ['css', 'server'])
