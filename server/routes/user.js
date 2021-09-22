const express = require("express");
const router = express.Router();
const {
  showUserProfile,
  handleLogout,
  handleCheckout,
  handlePurchase_test,
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
router.get("/order", (req, res) => {
  res.send("The order page of current user");
});
router.get("/me", showUserProfile);
router.post("/logout", handleLogout);
router.post("/checkout", handleCheckout);

/*in order to add endpoint POST /user/checkout, I need a function to add some products to the current user's cart.
will replace POST"/cart_test" by PATCH"/cart" when Ranveer update this endpoint
*/
router.post("/cart_test", handlePurchase_test);
module.exports = router;
