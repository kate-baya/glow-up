import React from 'react'

import Routine from './Routines'

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
