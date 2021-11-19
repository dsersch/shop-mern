const express = require('express');
const cardController = require('../controllers/cardController.js')

router = express.Router()

router
    .route('/:name')
    .get(cardController.searchByName)

module.exports = router;