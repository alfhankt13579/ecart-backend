// import mongoose

const mongoose = require("mongoose");

// Define Schema

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  rating: {
    rate: { type: String, required: true },
    count: { type: String, required: true },
  },
});

// create a model to store products
const products = new mongoose.model("products", productSchema);

module.exports = products;
