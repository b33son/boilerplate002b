import loggerMiddleware from '../logger'

describe('Logger middleware', () => {
  let state
  let store
  let next

  beforeEach(() => {
    state = {}
    store = { dispatch: jest.fn(), getState: () => state }
    next = jest.fn()
  })

  it('calls the next callback with any action', () => {
    loggerMiddleware(store)(next)({})

    expect(next).toHaveBeenCalledWith({})
  })
})
