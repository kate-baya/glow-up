import React from 'react'
import { connect } from 'react-redux'

import  { getRoutine } from '../apis/index'

import RoutineTask from './RoutineTask'

class Routine extends React.Component {

  componentDidMount () {
    getRoutine(this.props.disptach)
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

const mapStateToProps = (state) => {
  return {
    routine: state.routine
  }
}

export default connect(mapStateToProps)(Routine)