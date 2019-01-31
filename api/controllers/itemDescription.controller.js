const express = require('express')
const router = express.Router()

const { getAll } = require('../services/itemDescription.service')

router.get('/', async (req, res) => {
  try {
    let result = await getAll(null, null, '"id", "description"')
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
})

module.exports = router