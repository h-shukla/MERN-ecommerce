const Product = require('../models/productModel.js');

// Create product ---> Admin Route
exports.createProduct = async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    });
};

// Get all products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
};

// Update product ---> Admin Route
exports.updateProduct = async(req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product cannot be found"
        });
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
        return res.status(500).json({
            success: false,
            message: "Product cannot be found"
        });
    } else{
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    }
};
