import React from 'react'
import ChosenRoutine from './ChosenRoutine'
import { connect } from 'react-redux'

class CreateRoutine extends React.Component {
  state = {
    day: null
  }

  monday = e => {
    e.preventDefault()
    this.setState({
      day: 'monday'
    })
  }

  tuesday = e => {
    e.preventDefault()
    this.setState({
      day: 'tuesday'
    })
  }

  wednesday = e => {
    e.preventDefault()
    this.setState({
      day: 'wednesday'
    })
  }

  render () {
    const mondayRoutine = this.props.dailyRoutine.filter((task) => task.day === 'Monday')
    const tuesdayRoutine = this.props.dailyRoutine.filter((task) => task.day === 'Tuesday')
    const wednesdayRoutine = this.props.dailyRoutine.filter((task) => task.day === 'Wednesday')
    return(
      <div>
        <button onClick={this.monday}>Monday</button>
        {this.state.day === 'monday' && <ChosenRoutine routine={mondayRoutine}/>}
        <button onClick={this.tuesday}>Tuesday</button>
        {this.state.day === 'tuesday' && <ChosenRoutine routine={tuesdayRoutine} />}
        <button>Wednesday</button>
        {this.state.day === 'wednesday' && <ChosenRoutine routine={wednesdayRoutine} />}
        <button>Thursday</button>
        <button>Friday</button>
        <button>Saturday</button>
        <button>Sunday</button>
      </div>
    )
  }
}

export default connect()(CreateRoutine)