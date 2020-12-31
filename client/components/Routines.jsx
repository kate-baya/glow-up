import React from 'react'
import { connect } from 'react-redux'

import RoutineTask from './DailyRoutine'

class Routines extends React.Component {

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

export default connect()(Routines)
