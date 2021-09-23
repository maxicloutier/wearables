"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getProduct,
  getSingleProduct
} = require('./handlers');

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  
  // Endpoint that retrieves all items
  .get("/product", getProduct)

  // Endpoint that retrieves a specific
  .get("/product/:productId", getSingleProduct)


  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
