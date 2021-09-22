const items = require("./items.json");
const companies = require("./companies.json");
const users = require("./users");

const getAllProducts = () => {
  return items;
};
const getAllCompanies = () => {
  return companies;
};
const getAllUsers = () => {
  return users;
};

// a fake method of db.users.save()
const saveToFakeUserDB = (newUser) => {
  return users.push(newUser);
};

// a fake method of db.users.findOne()
const findOneByUsername = (username) => {
  return users.find((user) => user.username === username);
};

module.exports = {
  getAllProducts,
  getAllUsers,
  getAllCompanies,
  saveToFakeUserDB,
  findOneByUsername,
};
