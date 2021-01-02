import React from 'react'
import { connect } from 'react-redux'
import { dispatchUserRoutine } from '../actions/index'

import Routines from './Routines'
import CreateRoutine from './CreateRoutine'

class App extends React.Component {

  componentDidMount () {
    this.props.dispatch(dispatchUserRoutine())
  }

  render () {
    const routine = this.props.routine

    return (
      <>
        <div className='app'>
          <h1>Glow Up</h1>
          <CreateRoutine />
          <Routines routine={routine}/>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({routine}) => {
  console.log({routine})
  return {
    routine
  }
}

export default connect(mapStateToProps)(App)