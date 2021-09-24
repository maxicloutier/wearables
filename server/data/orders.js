const { v4: uuidv4 } = require("uuid");

// mock order database collection:
const orders = [
  {
    _id: uuidv4(),
    user_id: "Jane Doe",
    data: [],
  },
];
module.exports = orders;
