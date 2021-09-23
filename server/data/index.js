const items = require("./items.json");
const companies = require("./companies.json");
const users = require("./users");
const orders = require("./orders");

const getAllProducts = () => {
  return items;
};
const getAllCompanies = () => {
  return companies;
};
const getAllUsers = () => {
  return users;
};
const getAllOrders = () => {
  return orders;
};

// mock method of db.users.save()
const saveToFakeUserCollection = (newUser) => {
  return users.push(newUser);
};
// mock method of db.users.findOne({username:<username>})
const findOneByUsername = (username) => {
  return users.find((user) => user.username === username);
};
// mock method of db.user.findOne({_id:<ObjectId>})
const findOneByUser_id = (_id) => {
  return users.find((user) => user._id === _id);
};

// mock method of db.items.findOne({_id:<Number>})
const findOneByItem_id = (_id) => {
  return items.find((item) => item._id === Number(_id));
};

// mock method of db.orders.save()
const saveToFakeOrdersCollection = (newOrder) => {
  return orders.push(newOrder);
};
// mock method of db.orders.find({user_id:<ObjectId>})
const findAllOrdersByUser_id = (user_id) => {
  return orders.filter((order) => order.user_id == user_id);
};
// db.orders.findOne({_id:<ObjectId>})
const findOneOrderBy_id = (_id) => {
  return orders.find((order) => order._id === _id);
};
// mock method of db.orders.deleteOne({_id:<ObjectId>})
const deleteOneOrderBy_id = (_id) => {
  const orderFound = findOneOrderBy_id(_id);
  if (orderFound) {
    const i = orders.indexOf(orderFound);
    orders.splice(i, 1);
  }
};

// mock method of .insertOne()
const addProductToCart = (currentUser, product) => {
  currentUser.cart.push(product);
};

const removeProductFromCart = (currentUser, product) => {
  // the checking logic is already in handlers/handlePurchase_t
  const i = currentUser.cart.indexOf(product);
  currentUser.cart.splice(i, 1);
};

module.exports = {
  getAllProducts,
  getAllUsers,
  getAllCompanies,
  getAllOrders,
  saveToFakeUserCollection,
  saveToFakeOrdersCollection,
  findOneByUsername,
  findOneByUser_id,
  findOneByItem_id,
  findOneOrderBy_id,
  findAllOrdersByUser_id,
  deleteOneOrderBy_id,
  addProductToCart,
  removeProductFromCart,
};
