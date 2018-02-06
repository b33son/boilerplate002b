import { mapStateToProps, mapDispatchToProps } from '../../App'
import { toggleSidebar } from '../../../actions'

describe('<AppContainer />', () => {
  let state
  let props

  describe('.mapStateToProps', () => {
    beforeEach(() => {
      state = {
        reducer: {
          id: '3',
          pageTitle: 'React Redux Boilerplate'
        }
      }

      props = mapStateToProps(state)
    })

    it('returns the id', () => {
      expect(props.id).toEqual('3')
    })

    it('returns the title', () => {
      expect(props.title).toEqual('React Redux Boilerplate')
    })
  })

  describe('.mapDispatchToProps', () => {
    let dispatch

    beforeEach(() => {
      dispatch = jest.fn()
      props = mapDispatchToProps(dispatch)
    })

    it('returns a callback to toggle the sidebar', () => {
      const expectedAction = toggleSidebar()

      props.toggleSidebar()

      expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
})
