import { createStore, applyMiddleware, compose } from 'redux'
import withRedux from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import { dev } from 'Core/constants'
import rootReducer from 'Ducks'
import createLogger from './_logger'

const configureStore = initialState => {
  const middleware = [thunk]

  let enhancer

  if (dev) {
    middleware.push(createLogger())

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f
    if (typeof window !== 'undefined' && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension()
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension)
  } else {
    enhancer = applyMiddleware(...middleware)
  }

  return createStore(rootReducer, initialState, enhancer)
}

export default (mapStateToProps, mapDispatchToProps, mergeProps) =>
  withRedux(configureStore, mapStateToProps, mapDispatchToProps, mergeProps)
