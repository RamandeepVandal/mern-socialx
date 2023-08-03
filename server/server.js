const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
// database connection
const connectDB = require('./config/connectDB');
const router = require('./Routes/routes');
// PORT 
const PORT = 5000 || process.env.PORT;

// connect to the DB
connectDB();

// configure app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// use the routes
app.use('/', router);

// check if server is running   
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
