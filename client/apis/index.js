import request from 'superagent'
import { receiveUserRoutine } from '../actions/index'

export function getRoutine () {
  return request
  .get('/api/v1/routine')
  .then((res) => {
    dispatchEvent(receiveUserRoutine(res.body))
    return null
  })
}