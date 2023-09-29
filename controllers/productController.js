// logic for product

// import product collection
const products = require("../models/productSchema");

//create a function for getting all products
exports.getAllProducts = async (req, res) => {
  //Get all products from mongodb
  try {
    const allProducts = await products.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(401).json(error);
  }
};

// view particular product details
exports.viewProduct = async (req, res) => {
  //get product id from the request
  const id = req.params.id;
  try {
    const product = await products.findOne({ id });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json("Product not found");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
