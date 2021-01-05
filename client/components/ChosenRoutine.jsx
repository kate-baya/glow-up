import React from 'react'
import { connect } from 'react-redux'

class ChosenRoutine extends React.Component {
  render () {
    // console.log("chosen", this.props)
    // const mondayRoutine = this.props.chosenRoutine.filter((task) => task.day === 'Monday')
    // const tuesdayRoutine = this.props.chosenRoutine.filter((task) => task.day === 'Tuesday')
    return (
      <div>
        <ul>
          {this.props.routine.map((task) => {
            return <li key={task}>
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