import { getFruits } from '../apis/fruits'
import { getRoutine } from '../apis/index'

export const SET_FRUITS = 'SET_FRUITS'
export const GET_ROUTINE = 'GET_ROUTINE'

export function getRoutines (routine) {
  return {
    type: GET_ROUTINE,
    routine
  }
}

export function receiveUserRoutine () {
  return dispatch => {
    getRoutine()
      .then(routine => dispatch(getRoutines(routine)))
      // .catch(err => dispatch(setError(err)))
  }
}

// export function setFruits (fruits) {
//   return {
//     type: SET_FRUITS,
//     fruits
//   }
// }

// export function fetchFruits () {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }
