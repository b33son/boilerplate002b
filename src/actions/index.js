import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const setId = actionCreator(
  actionTypes.SET_ID,
  (id) => ({ id })
)

export const toggleSidebar = actionCreator(
  actionTypes.TOGGLE_SIDEBAR
)
