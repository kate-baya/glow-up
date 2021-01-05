import React from 'react'
import { connect } from 'react-redux'

import RoutineTask from './DailyRoutine'
import CreateRoutine from './CreateRoutine'

class Routines extends React.Component {

  state = {
    addRoutine: false
  }

  add = (e) => {
    e.preventDefault()
    console.log("hit")
    this.setState({
      addRoutine: true
    })
  }

  render () {
    const dailyRoutine = this.props.routine
    return (
      <div>
        {console.log(this.props)}
        {console.log(dailyRoutine)}
        <h2>Daily Routine</h2>
        <p><a href="#" onClick={this.add}>Add Routine</a></p>
        {this.state.addRoutine && <CreateRoutine dailyRoutine={dailyRoutine}/>}
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
