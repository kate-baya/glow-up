const express = require('express')

const db = require('../db/routine')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRoutine()
    .then(task => {
      res.json(task)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
module.exports = router
