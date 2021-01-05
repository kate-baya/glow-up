import { fetchRoutines } from '../apis/index'

export const RECEIVE_ROUTINE = 'GET_ROUTINE'

export function receiveRoutine (routine) {
  return {
    type: RECEIVE_ROUTINE,
    routine
  }
}

//this is where the info fetched from fetchRoutine is dispatched with the received info from receiveRoutine to the store
export function dispatchUserRoutine () {
  return dispatch => {
    fetchRoutines()
      .then(routine => dispatch(receiveRoutine(routine)))
      .catch(err => dispatch(setError(err)))
  }
}
