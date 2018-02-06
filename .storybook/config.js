import React from 'react'
import { configure, addDecorator } from '@storybook/react'

function loadStories () {
  require('../showcase/stories')
  // require as many stories as you need.
}

addDecorator((story) => (
  <div className='wrapper'>
    {story()}
  </div>
))

configure(loadStories, module)
