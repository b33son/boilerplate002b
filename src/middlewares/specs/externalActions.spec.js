import * as actions from '../../actions'
import externalActionsMiddleware from '../externalActions'

describe('External Actions middleware', () => {
  let handlers
  let next
  let middleware

  beforeEach(() => {
    handlers = {
      toggleSidebar: jest.fn()
    }
    next = jest.fn()
    middleware = externalActionsMiddleware(handlers)(undefined)(next)
  })

  it('calls next with the action', () => {
    const action = { type: 'AN_ACTION' }

    middleware(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  describe('when action is TOGGLE_SIDEBAR', () => {
    it('calls the toggleSidebar handler', () => {
      const action = actions.toggleSidebar()

      middleware(action)

      expect(handlers.toggleSidebar).toHaveBeenCalled()
    })
  })
})
