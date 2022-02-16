const router = require("express").Router();
const {
	getAllProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductDetails
} = require("../controllers/productController");

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router
	.route("/products/:id")
	.put(updateProduct)
	.delete(deleteProduct)
	.get(getProductDetails);

module.exports = router;
