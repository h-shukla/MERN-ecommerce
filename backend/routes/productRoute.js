const express = require('express');
const { createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct } = require('../controllers/productController.js');

const router = express.Router();

// All the routes below are after '/api/v1/...'
router.route('/product/new').post(createProduct);
router.route('/products').get(getAllProducts);
router.route('/product/:id')
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getProductDetails);

module.exports = router;
