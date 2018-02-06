import * as types from '../constants/action.types'

export default (handlers) => (store) => (next) => (action) => {
  next(action)

  switch (action.type) {
    case types.TOGGLE_SIDEBAR: {
      handlers.toggleSidebar()
      break
    }
  }
}
