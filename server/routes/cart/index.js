const cart = require("express").Router();

const {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("./handlers");

cart.get("/", getCart);
cart.post("/", addToCart);
cart.put("/", updateCart);
cart.delete("/:id", removeFromCart);
cart.delete("/", clearCart);

module.exports = cart;