//to define routes for client requests

// import
const express = require("express");
// import productController
const ProductController = require("../controllers/productController");
const wishlistController = require("../controllers/wishlistController");
const cartController = require("../controllers/cartController");

//create path
const router = new express.Router();

// use router object

// get all products api request
router.get("/products/all-products", ProductController.getAllProducts);

router.get("/products/view-product/:id", ProductController.viewProduct);

router.post("/wishlists/add-to-wishlist", wishlistController.addToWishlist);

router.get("/wishlists/view-all-wishlist", wishlistController.getWishlistItem);

router.delete(
  "/wishlists/delete-wishlist-product/:id",
  wishlistController.deleteWishlist
);

router.post("/carts/add-to-cart", cartController.addToCart);

router.get("/carts/view-all-cart", cartController.getCart);

router.delete(
  "/carts/delete-cart-product/:id",
  cartController.deleteCart
);

router.get("/carts/increment-cart-product/:id", cartController.incrementCartCount);

router.get("/carts/decrement-cart-product/:id", cartController.decrementCartCount);



//export router
module.exports = router;
