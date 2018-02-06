import { createStore, compose } from 'redux'
import createReducer from './reducer'
import createMiddleware from './middleware'
import externalActionsMiddleware from '../middlewares/externalActions'

function enableHotReload (store) {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer())
    })
  }
}

function isDevelopmentMode () {
  return process.env.NODE_ENV === 'development' ||
    process.env.RELEASE_STAGE === 'staging'
}

function configureStore (eventHandlers) {
  const store = createStore(
    createReducer(),
    undefined,
    compose(
      createMiddleware(externalActionsMiddleware(eventHandlers)),
      isDevelopmentMode() && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  enableHotReload(store)

  return store
}

export default configureStore
