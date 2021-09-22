const express = require("express");
const router = express.Router();
const { showUserProfile } = require("../handlers");

//TODO: Need auth middleware before using this router //router.use()

/*endpoints for this route:
GET/user/me; GET/user/:userId/order(? /user/me/order); GET/user/me/order/:orderId; DELETE/user/:userId/order/:orderId; PATCH/user/cart; POST /user/logout
*/
router.get("/me/order", (req, res) => {
  res.send("The order page of current user");
});
router.get("/me", showUserProfile);

module.express = router;
