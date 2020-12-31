import React from 'react'
import { connect } from 'react-redux'

import { dispatchUserRoutine } from '../actions/index'

import RoutineTask from './DailyRoutine'

class Routine extends React.Component {
  componentDidMount () {
    this.props.dispatch(dispatchUserRoutine())
  }

  render () {
    return (
      <div>
        <h2>Daily Routine</h2>
        <ul>
          {this.props.routine.map((task) => {
            return <RoutineTask key={task.id} task={task} />
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ routine }) => {
  return {
    routine
  }
}

export default connect(mapStateToProps)(Routine)
