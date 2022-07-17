const Product = require('../models/productModel.js');
const ErrorHander = require('../utils/errorHander.js');
cosnt catchAsyncErrors = require('../middlewares/catchAsyncErrors.js');

// Create product ---> Admin Route
exports.createProduct = async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    });
};

// Get all products
exports.getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
};

// Get product details
exports.getProductDetails = async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        // Calling error handler class so that we don't have to type it manually more than once
        return next(new ErrorHander("Product not found", 404));
    }
    return res.status(200).json({
        success: true,
        product
    });
};

// Update product ---> Admin Route
exports.updateProduct = async(req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
        // Calling error handler class so that we don't have to type it manually more than once
        return next(new ErrorHander("Product not found", 404));
    } else{
        return res.status(200).json({
            success: true,
            product: req.body
        });
    }
};

// Delete product ---> Admin Route
exports.deleteProduct = async(req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
        // Calling error handler class so that we don't have to type it manually more than once
        return next(new ErrorHander("Product not found", 404));
    } else{
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    }
};
