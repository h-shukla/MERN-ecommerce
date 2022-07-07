const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController.js');

const router = express.Router();

// All the routes below are after '/api/v1/...'
router.route('/product/new').post(createProduct);
router.route('/products').get(getAllProducts);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct);

module.exports = router;
