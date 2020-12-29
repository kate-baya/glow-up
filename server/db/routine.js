const connection = require('./connection')

function getRoutine (db = connection) {
  return db('routine').select()
}

module.exports = {
  getRoutine
}