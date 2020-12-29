import { GET_ROUTINE } from '../actions/index'

function routine (state = [], action) {
  switch (action.type) {
    case GET_ROUTINE:
      return action.routine

    default:
      return state
  }
}

export default routine
