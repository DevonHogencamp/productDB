/*  Main app for to do products app  */

// Require all neccesary packages and modules
var express = require('express');
var products = require('./routes/products');

// Start the express app
var app = express();

// Fire the products router
products(app);

// Listen for the 3000 port
app.listen(3000);

// Let us know which port the server is running on
console.log('Server running on port 3000');
