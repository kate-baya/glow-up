import request from 'superagent'

export function fetchRoutines () {
  return request
    .get('/api/v1/routine/monday')
    .then(routines => {
      return routines.body})
}
