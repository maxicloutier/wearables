"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const {
  handleCompany,
  handleUserProfile,
  handleSignIn,
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

// REST endpoints?
app.get("/bacon", (req, res) => res.status(200).json("🥓"));
// test: get the first 20 companies
app.get("/company", handleCompany);
// get user profile
app.get("/user/me", handleUserProfile);
// for user signin
app.post("/signin", handleSignIn);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
