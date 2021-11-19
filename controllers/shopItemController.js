const ShopItem = require('../models/shop-item.js');
const mongoose = require('mongoose');

module.exports = {
    getAllShopItems: async (req, res) => {
        try {
            const allShopItems = await ShopItem.find();

            res.status(200).json({
                status: 'success',
                data: allShopItems,
            })
        } catch (err) {
            res.status(404).json({
                status: 'failed',
                message: err,
            })
        }
    },
    addShopItem: async (req, res) => {
        try {
            const newShopItem = await ShopItem.create(req.body);

            res.status(201).json({
                status: 'success',
                data: newShopItem,
            })
        } catch (err) {
            res.status(400).json({
                status: 'failed',
                message: err,
            })
        }
    },
    getShopItem: async (req, res) => {
        try {
            const shopItem = await ShopItem.findById(req.params.id);

            res.status(200).json({
                status: 'success',
                data: shopItem,
            })
        } catch (err) {
            res.status(404).json({
                status: 'failed',
                message: err,
            })
        }
    },
    updateShopItem: async (req, res) => {
        try {
            const updatedShopItem = await ShopItem.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            })

            res.status(200).json({
                status: 'success',
                data: updatedShopItem,
            })
        } catch (err) {
            res.status(404).json({
                status: 'failed',
                message: err,
            })
        }
    },
    deleteShopItem: async (req, res) => {
        try {
            await ShopItem.findByIdAndDelete(req.params.id);

            res.status(200).json({
                status: 'success',
                data: null,
            })
        } catch (err) {
            res.status(404).json({
                status: 'failed',
                message: err,
            })
        }
    }
}