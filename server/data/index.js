const items = require("./items.json");
const companies = require("./companies.json");
const { v4: uuidv4 } = require("uuid");

const users = [
  {
    _id: uuidv4(),
    name: "test",
    email: "test@gmail.com",
    cart: [],
  },
  {
    _id: uuidv4(),
    name: "mongo",
    email: "mongo@gmail.com",
    cart: [],
  },
];

const getAllProducts = () => {
  return items;
};
const getAllCompanies = () => {
  return companies;
};
const getAllUsers = () => {
  return users;
};

module.exports = { getAllProducts, getAllUsers, getAllCompanies };
