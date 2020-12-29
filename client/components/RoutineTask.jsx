import React from 'react'
import { connect } from 'react-redux'

class RoutineTask extends React.Component {
  render () {
    return (
      <li>
        <h4>{this.props.task.task}</h4>
        <p>{this.props.task.time}</p>
      </li>
    )
  }
}

export default connect()(RoutineTask)