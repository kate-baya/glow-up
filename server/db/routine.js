const connection = require('./connection')

function getMondayRoutine (db = connection) {
  return db('monday_routine').select()
}

module.exports = {
  getMondayRoutine,
}
