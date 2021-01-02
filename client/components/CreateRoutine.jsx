import React from 'react'

class CreateRoutine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addTask: false,
      isChecked: false,
      task: 
        {
          name: '', 
          everyday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        }
      
    }

    this.addTask = this.addTask.bind(this);
  }

  toggleChange = () => {
    console.log(this.state.isChecked)
    this.setState({
      isChecked: !this.state.isChecked,
      monday: !this.state.task.monday
    })

  }

  addTask(e) {
    e.preventDefault()
    this.setState({
      addTask: true
    })
  }

  showRoutine(e) {
    e.preventDefault()
    this.setState({
      showRoutine: true
    })
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      task: {
        [name]: value
      }
    })
    console.log(this.state.task)
  }

  render () {
    return (
      <>
      <div>
        <button onClick={this.addTask}>
          Add task
        </button>
        </div>
          {this.state.addTask && (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Task:
                <input type="text" value={this.state.task.name} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="save"></input>
                <label>
                  Every day<input type="checkbox" name="everyday" value={this.state.task.everyday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Monday<input type="checkbox" name="monday" checked={this.state.task.monday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Tuesday<input type="checkbox" name="tuesday" value={this.state.task.tuesday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Wednesday<input type="checkbox" name="wednesday" value={this.state.task.wednesday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Thursday<input type="checkbox" name="thursday" value={this.state.task.thursday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Friday<input type="checkbox" name="friday" value={this.state.task.friday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Saturday<input type="checkbox" name="saturday" value={this.state.task.saturday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Sunday<input type="checkbox" name="sunday" value={this.state.task.sunday} onChange={this.handleChange}></input>
                </label>
                <label>
                  Checked<input type="checkbox" name="sunday" checked={this.state.isChecked} onChange={this.toggleChange}></input>
                </label>
              </form>
            </div>
          )}
      </>
    )
  }
}

export default CreateRoutine