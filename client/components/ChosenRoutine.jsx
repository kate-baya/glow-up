import React from 'react'
import { connect } from 'react-redux'

class ChosenRoutine extends React.Component {
  render () {
    console.log("chosen", this.props)
    return (
      <div>
        <ul>
          {this.props.mondayRoutine.map((task) => {
            return <li>
            <h4>{task.task}</h4>
            <p>{task.day}</p>
            <p>{task.time}</p>
          </li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect()(ChosenRoutine)