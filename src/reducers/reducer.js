import * as actionTypes from '../constants/action.types'

const initialState = {
  id: null,
  pageTitle: 'React Redux Boilerplate'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ID:
      return {
        ...state,
        id: action.payload.id
      }
    case 'log': {
      console.log('log')
      return state
    }
    default:
      return state
  }
}
