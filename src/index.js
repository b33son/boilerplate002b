import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import _ from 'lodash'
import configureStore from './config/store'
import { setId } from './actions'
import { App } from './containers'

// Restore existing version of lodash
_.noConflict()

window.MyApp = {
  start: function (rootElement, params) {
    startApp(rootElement, params)
  },
  stop: function (rootElement) {
    ReactDOM.unmountComponentAtNode(rootElement)
  },
  version: __APP_VERSION__
}

function startApp (rootElement, { eventHandlers, ...params }) {
  const store = configureStore(eventHandlers)
  setup(store.dispatch, params)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}

function setup (dispatch, { id }) {
  dispatch(setId(id))
}
