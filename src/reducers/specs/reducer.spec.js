import reducer from '../reducer'
import * as actions from '../../actions'

describe('reducer', () => {
  describe('when action is not known', () => {
    test('returns the current state', () => {
      const action = { type: 'UNKNOWN_ACTION' }
      const currentState = { id: null, pageTitle: 'React Redux Boilerplate' }
      const nextState = reducer(currentState, action)

      expect(nextState).toEqual(currentState)
    })
  })

  describe('when action is SET_ID', () => {
    test('adds the id to the state', () => {
      const action = actions.setId('1')
      const currentState = { id: null, pageTitle: 'React Redux Boilerplate' }
      const nextState = reducer(currentState, action)

      const expectedState = { id: '1', pageTitle: 'React Redux Boilerplate' }
      expect(nextState).toEqual(expectedState)
    })

    describe('and there is already an id in state', () => {
      test('overrides the previous id', () => {
        const action = actions.setId('2')
        const currentState = { id: '1', pageTitle: 'React Redux Boilerplate' }
        const nextState = reducer(currentState, action)

        const expectedState = { id: '2', pageTitle: 'React Redux Boilerplate' }
        expect(nextState).toEqual(expectedState)
      })
    })
  })
})
