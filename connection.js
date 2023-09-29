// import mongoose
const mongoose = require("mongoose");

// add connection from .env
const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Database Connection Established");
  })
  .catch((err) => {
    console.log(err);
  });
