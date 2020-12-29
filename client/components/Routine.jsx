import React from 'react'
import { connect } from 'react-redux'

import  { getRoutine } from '../apis/index'
import { receiveUserRoutine } from '../actions/index'

import RoutineTask from './RoutineTask'

class Routine extends React.Component {

  componentDidMount () {
    // getRoutine(this.props.disptach) //problem is here
    // console.log("routine.jsx, props, line 12 -", this.props)
    this.props.dispatch(receiveUserRoutine())
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

const mapStateToProps = ({routine}) => {
  console.log("routine.jsx line 29")
  return {
    routine
  }
}

export default connect(mapStateToProps)(Routine)