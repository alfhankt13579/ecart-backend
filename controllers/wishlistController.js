//logic for wishlist

// import product collection
const wishlists = require("../models/wishlistSchema");

exports.addToWishlist = async (req, res) => {
  const { id, title, price, image } = req.body;
  // logic
  try {
    // check if the product is available
    const item = await wishlists.findOne({ id });
    if (item) {
      res.status(403).json("Product is already added to Wishlist");
    } else {
      //Add to Wishlist
      const newProduct = new wishlists({ id, title, price, image });
      await newProduct.save();
      res.status(200).json("Product has been added");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getWishlistItem = async (req, res) => {
  try {
    const allWishlist = await wishlists.find();
    res.status(200).json(allWishlist);
  } catch (error) {
    res.status(404).json(error);
  }
};

//delete particular product
exports.deleteWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const removeProduct = await wishlists.deleteOne({ id });
    if (removeProduct) {
      const allItems = await wishlists.find();
      res.status(200).json(allItems);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
