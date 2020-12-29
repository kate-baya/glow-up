import React from 'react'

import Routine from './Routine'

export default class App extends React.Component {
  render () {
    return (
      <>
        <div className='app'>
          <h1>Glow Up</h1>
          <Routine />
        </div>
      </>
    )
  }
}
