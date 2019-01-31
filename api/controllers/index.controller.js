const express = require('express')
const router = express.Router()

// Controllers
const itemDescriptionCtrl = require('./itemDescription.controller')

// Routes

// url: /api/item-description
router.use('/item-description', itemDescriptionCtrl);

module.exports = router