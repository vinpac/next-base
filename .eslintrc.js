const path = require('path')

const resolve = (...args) => path.resolve('./src', ...args)
module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb'],

  globals: {
    __DEV__: true,
  },

  env: {
    node: true,
    browser: true,
  },

  rules: {
    // `js` and `jsx` are common extensions
    // `mjs` is for `universal-router` only, for now
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],

    'function-paren-newline': 0,
    'object-curly-newline': 0,

    semi: [2, 'never'],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],

    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],

    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',

    'no-param-reassign': ['error', { props: false }],

    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': 'off',

    // https://github.com/kriasoft/react-starter-kit/pull/961
    // You can reopen this if you still want this rule
    'react/prefer-stateless-function': 'off',
    'import/no-dynamic-require': 0,
    'global-require': 0,

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          context: path.resolve(__dirname),
          resolve: {
            alias: {
              Components: resolve('components'),
              Styles: resolve('styles'),
              Core: resolve('core'),
              Lib: resolve('lib'),
              Server: resolve('server'),
              Ducks: resolve('redux', 'ducks'),
            },
          },
        },
      },
    },
  },
}
