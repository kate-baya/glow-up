import request from 'superagent'
import { receiveUserRoutine } from '../actions/index'

// export function getRoutine (dispatch) {
//   return request
//   .get('/api/v1/routine')
//   .then((res) => { 
//     dispatch(receiveUserRoutine(res.body))
//     return null
//   })
// }

export function getRoutine () {
  return request
    .get('/api/v1/routine')
    .then(routine => routine.body)
}