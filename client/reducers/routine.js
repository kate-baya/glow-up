import { RECEIVE_USER_ROUTINE } from '../actions/index'

function routine (state= [], action) {
  switch(action.type) {
    case RECEIVE_USER_ROUTINE:
      return action.task

    default:
      return state  
  }
}

export default routine