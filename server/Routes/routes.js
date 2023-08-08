const express = require('express');
const { registerAccount, getAccounts, loginAccount } = require('../controllers/userControllers');
const { getAllProducts, addProduct, getProductUser, getUserProducts, deletePost, updatePost } = require('../controllers/productControllers');

// create router
const router = express.Router();

// create the routes -> USER ACCOUNTS
router.route('/register').post(registerAccount);
router.route('/accounts').get(getAccounts);
router.route('/login').post(loginAccount);

// create the routes -> PRODUCTS
router.route('/products').get(getAllProducts).post(addProduct);
router.route('/product/user').post(getProductUser);
router.route('/user/products').post(getUserProducts)
router.route('/user/post/:id').delete(deletePost).put(updatePost);

module.exports = router;