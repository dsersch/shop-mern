const express = require('express');
const shopItemController = require('../controllers/shopItemController.js');

const router = express.Router();

router
    .route('/')
    .get(shopItemController.getAllShopItems)
    .post(shopItemController.addShopItem)

router
    .route('/:id')
    .get(shopItemController.getShopItem)
    .patch(shopItemController.updateShopItem)
    .delete(shopItemController.deleteShopItem)

module.exports = router;