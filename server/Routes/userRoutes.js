const express = require('express');
const { registerAccount, getAccounts, loginAccount } = require('../controllers/userControllers');

// create router
const router = express.Router();

// create the routes
router.route('/register').post(registerAccount);
router.route('/accounts').get(getAccounts);
router.route('/login').post(loginAccount);

module.exports = router;