import request from 'superagent'

export function fetchRoutine () {
  return request
    .get('/api/v1/routine')
    .then(routine => routine.body)
}
