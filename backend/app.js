const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error.js');

app.use(express.json());

// Route imports
const product = require('./routes/productRoute.js');

// Route definitions
// Below URI will be used as the http://localhost:port/...
app.use('/api/v1', product);

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
