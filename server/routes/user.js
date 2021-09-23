const express = require("express");
const router = express.Router();
const {
  showUserProfile,
  handleSignOut,
  handleCheckout,
  handlePurchase_t,
  listUserOrders,
  getOrderBy_id,
  deleteOrderBy_id,
  getProductBy_idMW,
} = require("../handlers");

// Need auth middleware before using this router
router.use((req, res, next) => {
  if (!req.session.user_id) {
    console.log("AUTH FAILED!");
    return res.status(404).json({
      status: 404,
      message: "Authentication Failed",
    });
  }
  next();
});

/*endpoints for this route:
GET/user/me; GET/user/me/order; GET/user/order; GET/user/order/:orderId; DELETE/user/order/:orderId; PATCH/user/cart; POST /user/logout; POST /user/checkout
*/
router.get("/order", listUserOrders);
router.get("/order/:_id", getOrderBy_id);
router.delete("/order/:_id", deleteOrderBy_id);
router.get("/me", showUserProfile);
router.post("/signout", handleSignOut);
router.post("/checkout", handleCheckout);

/* FIXME: (I am not sure, plz fix me if I am wrong):
    I feel that for PATCH /user/cart, we only need to operation: "add" & "remove" rather than "add", "increase", "decrease" and "remove". And using these two operations can make the cart works.

    In order to make sure, I think I need to check the FE part for shoping cart
*/
router.patch("/cart_test", getProductBy_idMW, handlePurchase_t);

module.exports = router;
