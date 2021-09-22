const items = require("./data/items.json");

const getProduct = (req, res) => {
  const data = items;
  res.status(200).json({
    status: 200,
    message: "Successfully retrieved all items",
    items: data,
  });
};

const getSingleProduct = (req, res) => {
  const { itemId } = req.params;
  const singleItem = items.filter((item) => {
    return item._id === Number(`${req.params.itemId}`);
  });

  if (singleItem.length > 0) {
    res.status(200).json({
      status: 200,
      message: `Successfully retrieved item ${itemId} `,
      item: singleItem,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Couldn't find item",
    });
  }
};

const { getAllCompanies } = require("./data");
const {
  getAllCompanies,
  getAllUsers,
  saveToFakeUserDB,
  findOneByUsername,
  findOneByUser_id,
} = require("./data");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
//const session = require("express-session");

const listCompanies = (req, res) => {
  const first20 = getAllCompanies().slice(0, 20);
  if (first20) {
    res.status(200).json({
      status: 200,
      data: first20,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Failed to find company",
    });
  }
};
const listUsers = (req, res) => {
  const list = getAllUsers();
  if (list) {
    res.status(200).json({
      status: 200,
      data: list,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Cannot find user",
    });
  }
};

const showUserProfile = (req, res) => {
  const userFound = findOneByUser_id(req.session.user_id);
  res.status(200).json({
    status: 200,
    data: userFound,
    message: "Here is your user profile",
  });
};

const handleSignUp = async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 12);
  // then save the new user to the fake datebase
  console.log("hash:", hash);
  //username and password are required when creating a new user
  if (username && password) {
    //username should be unique, findOneByUsername() should return false
    const userFound = findOneByUsername(username);
    if (userFound) {
      res.status(400).json({
        status: 400,
        message: "username exists",
      });
    }

    const newUser = {
      _id: uuidv4(),
      username: username,
      hashedPassword: hash,
      cart: [],
    };
    //if the user signed up, save _id of the user to session
    if (newUser) {
      req.session.user_id = newUser._id;
    }
    saveToFakeUserDB(newUser);

    console.log("users num:", getAllUsers().length);
    res.status(200).json({
      status: 200,
      data: newUser,
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Failed to create new user",
    });
  }
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  //username should be unique, so use it for finding the user
  if (!username || !password) {
    res.status(404).json({
      status: 404,
      message: "Both username and password are required!",
    });
  }

  const userFound = findOneByUsername(username);
  if (userFound && password) {
    const validPsw = await bcrypt.compare(password, userFound.hashedPassword);
    console.log("validPsw", validPsw);

    if (validPsw) {
      //if the user can login, save _id of the user to session
      req.session.user_id = userFound._id;
      console.log("session:", req.session);
      return res.status(200).json({
        status: 200,
        data: userFound,
        message: "User login successfully!",
      });
    }
  }

  res.status(404).json({
    status: 404,
    message: "Failed to login, plz check your username and password",
  });
};

const handleLogout = (req, res) => {
  req.session.destroy();
  res.status(200).json({
    status: 200,
    message: "LogOut!",
  });
};

const handleUserProfile = (params) => {};

const handleSignIn = (params) => {};

module.exports = {
  getProduct,
  getSingleProduct,
  handleUserProfile,
  handleSignIn,
  listCompanies,
  listUsers,
  showUserProfile,
  handleLogin,
  handleLogout,
  handleSignUp,
};
