"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const app = express();
const {
  listCompanies,
  listUsers,
  showUserProfile,
  handleLogin,
  handleLogout,
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

// REST endpoints?
app.get("/bacon", (req, res) => res.status(200).json("🥓"));
// test: get the first 20 companies
app.get("/company", listCompanies);
// get user profile
app.get("/user/me", showUserProfile);

// add new user to the fake db collection:users
app.post("/signup", handleSignUp);
// check the user
app.post("/login", handleLogin);
app.post("/user/logout", handleLogout);

// only for testing, should not be used in FE
app.get("/users", listUsers);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
