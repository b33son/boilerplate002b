import React from 'react'
import { string, func } from 'prop-types'

const App = ({ id, title, toggleSidebar }) => (
  <div>
    <h1>{`${id}: ${title}`}</h1>
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
  </div>
)

App.propTypes = {
  id: string.isRequired,
  title: string,
  toggleSidebar: func
}

export default App
