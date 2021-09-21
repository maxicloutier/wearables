const routes = require("express").Router();
const cart = require("./cart");

routes.get("/", (req, res) => {
    try {
      return res.status(200).json({
        success: true,
        message: "Connected!",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  });
  
  routes.use("/cart", cart);
  
  module.exports = routes;