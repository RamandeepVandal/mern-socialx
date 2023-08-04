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

// POST 
// get info on the user that posted the product
const getProductUser = async(req, res) => {
    const productData = await Product.findById(req.body.id);
    
    //console.log(productData);

    // find the user that is linked to the product sale
    const user = await User.findById(productData?.postUser);

    res.status(200).json({user});
}

// POST
// get all the posts made by current user
const getUserProducts = async(req, res) => {
    const userID = await req.body.id;

    // check if the id exists
    if(!userID) {
        res.status(400);
        throw new Error('No such user exists.');
    }

    // check which products does the id correspond to in the products table
    const products = await Product.find({postUser: userID});

    if(!products) {
        res.status(400).json({status: 'error', error: 'No products exist.'});
    }

    res.status(200).json(products);
}

module.exports = { getAllProducts, addProduct, getProductUser, getUserProducts };