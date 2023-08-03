const express = require('express');
const { registerAccount, getAccounts, loginAccount } = require('../controllers/userControllers');
const { getAllProducts, addProduct } = require('../controllers/productControllers');

// create router
const router = express.Router();

// create the routes -> USER ACCOUNTS
router.route('/register').post(registerAccount);
router.route('/accounts').get(getAccounts);
router.route('/login').post(loginAccount);

// create the routes -> PRODUCTS
router.route('/products').get(getAllProducts).post(addProduct);

module.exports = router;