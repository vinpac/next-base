const path = require('path')
const fs = require('fs')
const autoprefixer = require('autoprefixer')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssFilters = require('postcss-filters')
const postcssSelectorNot = require('postcss-selector-not')

const resolve = (...args) => path.resolve('./src', ...args)
let staticDistDirname

try {
  staticDistDirname = fs.readFileSync(path.resolve('STATIC_DIRNAME'), 'utf8').trim()
} catch (error) {
  throw new Error("Missing STATIC_DIRNAME. Run 'npm run compile:css'")
}

module.exports = {
  serverRuntimeConfig: {
    staticDistDirname,
  },
  useFileSystemPublicRoutes: false,
  webpack(config, { isServer, dev }) {
    Object.assign(config.resolve, {
      alias: Object.assign({}, config.resolve.alias, {
        Core: resolve('server', 'core'),
        Lib: resolve('lib'),
        Components: resolve('components'),
        Server: resolve('server'),
        Styles: resolve('styles'),
      }),
    })

    config.module.rules.push({
      test: /\.styl$/,
      rules: [
        {
          loader: 'styled-css-loader',
          options: {
            sourceMap: true,
            hmr: !isServer && dev,
            // CSS Nano http://cssnano.co/options/
            minimize: !dev,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [
              postcssFilters(),
              postcssSelectorNot(),
              postcssFlexbugsFixes(),
              autoprefixer({ browses: ['last 2 versions'] }),
            ],
          },
        },
        { loader: 'stylus-loader' },
      ],
    })

    return config
  },
}
