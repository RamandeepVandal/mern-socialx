const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/users');

// GET request
// get all the products 
const getAllProducts = async (req, res) => {
    const data = await Product.find({});

    // no product fields exist in the db
    if (!data) {
        res.status(400).json({ status: 'error', error: 'No products exist.' })
    }

    res.status(200).json(data);
}

// POST request
// Add a product 
const addProduct = async (req, res) => {
    const data = await req.body;

    // if no req.body is null
    if (!data) {
        res.status(400).json({ status: 'error', error: 'Please fill out all fields.' })
    }

    // add the product into the db
    const product = await Product.create(data);
    await product.save();

    res.status(200).json({ status: 'ok', product })
}

// GET 
// get info on the user that posted the product
const getProductUser = async(req, res) => {
    const productData = await Product.findById(req.body.id);
    
    //console.log(productData);

    // find the user that is linked to the product sale
    const user = await User.findById(productData?.postUser);

    res.status(200).json({user});
}

module.exports = { getAllProducts, addProduct, getProductUser };