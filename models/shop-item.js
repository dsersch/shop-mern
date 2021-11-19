const mongoose = require('mongoose');

const shopItemSchema = new mongoose.Schema({
    cardId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
        required: true,
    }
})

const ShopItem = mongoose.model('ShopItem', shopItemSchema);

module.exports = ShopItem;