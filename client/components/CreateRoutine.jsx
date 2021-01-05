import React from 'react'
import ChosenRoutine from './ChosenRoutine'
import { connect } from 'react-redux'

class CreateRoutine extends React.Component {
  state = {
    day: 'monday'
  }

  mondayRoutine = this.props.dailyRoutine.filter(task => day === "Monday")

  render () {
    return(
      <div>
        {console.log("createRoutine", this.props)}
        <button>Monday</button>
        {this.state.day === 'monday' && <ChosenRoutine mondayRoutine={mondayRoutine}/> }
        <button>Tuesday</button>
        <button>Wednesday</button>
        <button>Thursday</button>
        <button>Friday</button>
        <button>Saturday</button>
        <button>Sunday</button>
      </div>
    )
  }
}

export default connect()(CreateRoutine)