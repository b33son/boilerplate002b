import React from 'react'
import { storiesOf, action } from '@storybook/react'
import App from '../../src/components/App'

const toggleSidebar = action('toggleSidebar')

storiesOf('App', module)
  .add('initial state', () => {
    const props = {
      id: '1',
      title: 'A Title',
      toggleSidebar
    }

    return (
      <App {...props} />
    )
  })
