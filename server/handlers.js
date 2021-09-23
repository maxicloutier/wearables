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
  getAllProducts,
  saveToFakeUserCollection,
  findOneByUsername,
  findOneByUser_id,
  findOneByItem_id,
  addProductToCart,
  removeProductFromCart,
  saveToFakeOrdersCollection,
  findAllOrdersByUser_id,
  deleteOneOrderBy_id,
  getAllOrders,
  findOneOrderBy_id,
} = require("./data");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
//const session = require("express-session");

const listProducts = (req, res) => {
  const first20 = getAllProducts().slice(0, 20);
  if (first20) {
    res.status(200).json({
      status: 200,
      data: first20,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Failed to find product",
    });
  }
};
const listOrders = (req, res) => {
  res.send(getAllOrders());
};

const getOrderBy_id = (req, res) => {
  const { _id } = req.params;
  const orderFound = findOneOrderBy_id(_id);
  if (orderFound) {
    res.status(200).json({
      status: 200,
      order: orderFound,
    });
  } else {
    return res.status(404).json({
      status: 404,
      message: "Order not found!",
    });
  }
};

const deleteOrderBy_id = (req, res) => {
  // should add a mock delete function in data/index.js
  const { _id } = req.params;
  const orderFound = findOneOrderBy_id(_id);
  if (orderFound) {
    // if cancel the order, numInStock of the products must be changed
    console.log("orderFound:", orderFound);
    orderFound.data.forEach((product) => product.numInStock++);
    deleteOneOrderBy_id(_id);
    res.status(200).json({
      status: 200,
      message: `Order: _id: ${_id} has been deleted!`,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Failed to delete: cannot find the order",
    });
  }
};

const getProductBy_id = (req, res) => {
  const { _id } = req.params;
  //console.log("_id", _id);
  const productFound = findOneByItem_id(_id);
  if (productFound) {
    res.status(200).json({
      status: 200,
      data: productFound,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Product not found!",
    });
  }
};

// this function being used as middleware for PATCH /user/cart_test
const getProductBy_idMW = (req, res, next) => {
  console.log("req.body: ", req.body);
  const result = findOneByItem_id(req.body.product_id);
  console.log("result:", result);
  if (result) {
    res.productFound = result;
    console.log("res.pf:", res.productFound);
    next();
  } else {
    return res.status(400).json({
      status: 400,
      message: "Product not found",
    });
  }
};

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
  //username and password are required when creating a new user
  if (username && password) {
    //username should be unique, findOneByUsername() should return false
    const userFound = findOneByUsername(username);
    const hash = await bcrypt.hash(password, 12);

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
    req.session.user_id = newUser._id;
    // then save the new user to the fake datebase
    saveToFakeUserCollection(newUser);

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

const handleSignIn = async (req, res) => {
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

  res.status(400).json({
    status: 400,
    message: "Failed to login, plz check your username and password",
  });
};

const handleSignOut = (req, res) => {
  req.session.destroy();
  res.status(200).json({
    status: 200,
    message: "LogOut!",
  });
};

const handleCheckout = (req, res) => {
  /* add a new order to the order collection 
  an order should be like this:
  {
    _id: uuid,
    user_id: uuid,
    data:<array getting from cart>
    //maybe also should add the checkout time/date?
  }
  */
  const currentUser = findOneByUser_id(req.session.user_id);
  const cart = currentUser.cart;
  if (cart) {
    const newOrder = {
      _id: uuidv4(),
      user_id: currentUser._id,
      data: cart,
    };
    saveToFakeOrdersCollection(newOrder);

    res.status(200).json({
      status: 200,
      orderDetails: newOrder,
      message: "Happy shopping!",
    });
  }
  // clear the current user's cart
  currentUser.cart = [];
};

const listUserOrders = (req, res) => {
  const user_id = req.session.user_id;
  console.log("cur user_id", user_id);
  if (user_id) {
    const orderAry = findAllOrdersByUser_id(user_id);
    console.log("order list:", orderAry);

    if (orderAry) {
      res.status(200).json({
        status: 200,
        message: "Here lists your orders",
        orders: orderAry,
      });
    } else {
      res.status(404).json({
        status: 400,
        message: "Sorry, order not found!",
      });
    }
  }
};

const handlePurchase_t = (req, res) => {
  const operation = req.body.operation;
  if (operation == null) {
    return res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }
  const currentUser = findOneByUser_id(req.session.user_id);
  //numInStock of the product must be >=1, then can do the adding operation
  if (operation === "add" && res.productFound.numInStock > 0) {
    console.log("BEFORE adding to cart:", res.productFound.numInStock);
    addProductToCart(currentUser, res.productFound);
    // need to reduce the qty number of the product in stock
    res.productFound.numInStock--;
    console.log("AFTER adding to cart:", res.productFound.numInStock);
    res.status(200).json({
      status: 200,
      message: "Increase the item by one",
      item: res.productFound,
    });
  } else if (operation === "remove") {
    //  if the product already in the cart, can do the removing operation
    if (currentUser.cart.includes(res.productFound)) {
      //  need to add the qty number of the product
      // numInStock++
      console.log("BEFORE decresing:", res.productFound.numInStock);
      res.productFound.numInStock++;
      removeProductFromCart(currentUser, res.productFound);
      console.log("AFTER decresing:", res.productFound.numInStock);
      res.status(200).json({
        status: 200,
        message: "Decreace the item by one",
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Failed to remove: the item is not in the cart",
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "Failed purchase",
    });
  }
};

module.exports = {
  getProduct,
  getSingleProduct,
  listCompanies,
  listUsers,
  listProducts,
  listOrders,
  listUserOrders,
  showUserProfile,
  handleSignIn,
  handleSignOut,
  handleSignUp,
  handleCheckout,
  getProductBy_id,
  getProductBy_idMW,
  getOrderBy_id,
  deleteOrderBy_id,
  handlePurchase_t,
};
