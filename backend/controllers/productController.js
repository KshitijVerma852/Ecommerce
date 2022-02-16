const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createProduct = catchAsyncErrors(async (req, res) => {
	const product = await Product.create(req.body);
	res.status(201).json({ success: true, product });
});

exports.getAllProducts = catchAsyncErrors(async (req, res) => {
	const products = await Product.find();
	res.status(200).json({ success: true, products });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return next(new ErrorHandler("Product not found.", 404));
	}
	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false
	});
	res.status(200).json({
		success: true,
		product
	});
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return next(new ErrorHandler("Product not found.", 404));
	}
	product = await Product.findByIdAndDelete(req.params.id);
	res.status(200).json({ success: true, product });
});

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		return next(new ErrorHandler("Product not found", 404));
	}
	res.status(200).json({
		success: true,
		product
	});
});
