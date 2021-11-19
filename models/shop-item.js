const mongoose = require('mongoose');

const shopItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const ShopItem = mongoose.model('ShopItem', shopItemSchema);

module.exports = ShopItem;