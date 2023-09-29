//auto load env file
require("dotenv").config();

//import
const express = require("express");

const cors = require("cors");

require("./connection");

const router = require("./routes/router");
//app create
const server = express();

//define port
const PORT = 5000;

//use cors
server.use(cors());
server.use(express.json());
server.use(router);

// run app
server.listen(PORT, () => {
  console.log("listening in port " + PORT);
});

// define routes
server.get("/", (req, res) => {
  res.status(200).json("ECommerce Service Started");
});
