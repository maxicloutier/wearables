const express = require("express");
const router = express.Router();
const { showUserProfile, handleLogout } = require("../handlers");

// Need auth middleware before using this router //router.use()
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
GET/user/me; GET/user/:userId/order(? /user/me/order); GET/user/me/order/:orderId; DELETE/user/:userId/order/:orderId; PATCH/user/cart; POST /user/logout
*/
router.get("/me/order", (req, res) => {
  res.send("The order page of current user");
});
router.get("/me", showUserProfile);
router.post("/logout", handleLogout);

module.exports = router;
