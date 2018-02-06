import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import App from '../../App'

describe('<App />', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      id: '1',
      title: 'Hello Talkdesk!',
      toggleSidebar: jest.fn()
    }

    wrapper = shallow(<App {...props} />)
  })

  it('renders correctly', () => {
    const tree = renderer.create(<App {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('when the button is clicked', () => {
    it('calls the toggleSidebar handler', () => {
      const button = wrapper.find('button')

      button.simulate('click')

      expect(props.toggleSidebar).toHaveBeenCalled()
    })
  })
})
