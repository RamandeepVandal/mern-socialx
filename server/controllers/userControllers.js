const mongoose = require('mongoose');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcyrpt = require('bcryptjs');

// Register an account - POST request
const registerAccount = async (req, res) => {
    try {
        // hash the password
        const newPassword = await bcyrpt.hash(req.body.password, 10);
        // create the new user 
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword
        });
        res.json({ message: 'Account created!' })
    } catch (error) {
        res.json({ status: 'error', error: 'Account with this email already exists.' })
    }
}

// Login - POST request
const loginAccount = async (req, res) => {
    // check if email exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.json({ status: 'error', error: 'Account does not exist.' })
    }

    // check if the password matches
    const isPasswordValid = await bcyrpt.compare(req.body.password, user.password);

    if(isPasswordValid) {
        const token = jwt.sign({
           id: user._id
        }, process.env.JWT_SECRET);
        return res.json({ status: 'ok', user: token, id: user._id });
    } else {
        return res.json({ status: 'error', user: false })
    }
}

// Verify if user exists -> used with the loginAccount function
/*
const verifyUser = async (req, res) => {
    const token = req.header['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        const user = await User.findOne({ email: email });
        return res.json({ status: 'ok', name: user.name })
    } catch (error) {
        console.log(error);
        return res.json({ status: 'error', error: 'Invalid token.' })
    }
}
*/

// get all accounts -> ADMIN ONLY -> GET request
const getAccounts = async (req, res) => {
    const data = await User.find({});

    if (!data) {
        res.status(400).json({ status: 'error', error: 'No accounts exist.' });
    }

    res.status(200).json(data);
}

module.exports = { registerAccount, getAccounts, loginAccount };