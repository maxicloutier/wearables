"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const userRoutes = require("./routes/user");
const app = express();
const {
  listCompanies,
  listUsers,
  listProducts,
  listOrders,
  getProductBy_id,
  handleLogin,
  handleSignUp,
} = require("./handlers");

const PORT = 4000;

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));
app.use(session({ secret: "mongoose" }));
app.use("/user", userRoutes);

// REST endpoints?
app.get("/bacon", (req, res) => res.status(200).json("🥓"));
// test: get the first 20 companies
app.get("/company", listCompanies);

// add new user to the fake db collection:users
app.post("/signup", handleSignUp);
// check the user
app.post("/login", handleLogin);

// only for testing
app.get("/users", listUsers);
app.get("/product20", listProducts);
app.get("/orders", listOrders);

// for pruchase
app.get("/product/:_id", getProductBy_id);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
