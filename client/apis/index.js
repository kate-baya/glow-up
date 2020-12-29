import request from 'superagent'

export function getRoutine () {
  return request
    .get('/api/v1/routine')
    .then(routine => routine.body)
}
