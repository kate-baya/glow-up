import { RECEIVE_ROUTINE } from '../actions/index'

function routine (state = [], action) {
  switch (action.type) {
    case RECEIVE_ROUTINE:
      return action.routine

    default:
      return state
  }
}

export default routine
