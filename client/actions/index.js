import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const RECEIVE_USER_ROUTINE = 'RECEIVE_USER_ROUTINE'

export const receiveUserRoutine = (task) => {
  return {
    type: RECEIVE_USER_ROUTINE,
    task: task
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
