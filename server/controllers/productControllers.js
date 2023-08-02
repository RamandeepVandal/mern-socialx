const mongoose = require('mongoose');
const Product = require('../models/product');

// GET request
// get all the products 
const getAllProducts = async(req, res) => {
    const data = await Product.find({});

    // no product fields exist in the db
    if(!data) {
        res.status(400).json({ status: 'error', error: 'No products exist.' })
    }

    res.status(200).json(data);
}

module.exports = { getAllProducts };