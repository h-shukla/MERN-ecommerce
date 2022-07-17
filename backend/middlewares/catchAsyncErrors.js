module.exports = catchAsyncErrors = (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
};
