const carts = require("../models/cartSchema");

exports.addToCart = async (req, res) => {
  const { id, title, price, image, quantity } = req.body;
  try {
    const products = await carts.findOne({ id });
    if (products) {
      products.quantity += 1;
      products.grandTotal = products.price * products.quantity;
      products.save();
      res.status(200).json("Product details updated");
    } else {
      const newProduct = new carts({
        id,
        title,
        price,
        image,
        quantity,
        grandTotal: price,
      });
      await newProduct.save();
      res.status(200).json("Product added successsfully");
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getCart = async (req, res) => {
  try {
    const allCart = await carts.find();
    res.status(200).json(allCart);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const removeProduct = await carts.deleteOne({ id });
    if (removeProduct.deleteCount != 0) {
      const allItems = await carts.find();
      res.status(200).json(allItems);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.incrementCartCount = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await carts.findOne({ id });
    if (product) {
      product.quantity += 1;
      product.grandTotal = product.price * product.quantity;
      await product.save();
      const allCart = await carts.find();
      res.status(200).json(allCart);
    } else {
      res.status(401).json("Product not found");
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.decrementCartCount = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await carts.findOne({ id });
    if (product) {
      product.quantity -= 1;
      if (product.quantity == 0) {
        await carts.deleteOne({ id });
        const allCart = await carts.find();
        res.status(200).json(allCart);
      } else {
        product.grandTotal = product.price * product.quantity;
        await product.save();
        const allCart = await carts.find();
        res.status(200).json(allCart);
      }
    } else {
      res.status(401).json("Product not found");
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
