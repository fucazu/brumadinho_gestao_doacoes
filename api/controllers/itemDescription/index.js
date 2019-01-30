const express = require('express')
const router = express.Router()

const { getAll } = require('../../services/itemDescription')

router.get('/', async (req, res) => {
  try {
    let result = await getAll(null, null, '"id", "description"')
    res.status(200).json(result)
  } catch (error) {
    console.log('error itemDescription = ', error)
    res.status(500).json({ error: true, msg: error.detail || error.message })
  }
})

module.exports = router