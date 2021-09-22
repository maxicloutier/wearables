const { v4: uuidv4 } = require("uuid");

// a fake user database:
const users = [
  {
    _id: uuidv4(),
    username: "test",
    hashedPassword:
      "$2b$12$fzUmb3pTlEuRFYP16grAvu3.WdFZRW8752Ko0mS1nYoOD/Do5LiSC", //plain pw: password
    cart: [],
  },
  {
    _id: uuidv4(),
    username: "kittycatluvr",
    hashedPassword:
      "$2b$12$.JtGoF.bPNTJEYkN3Y6Gb.PfbpUmYkR2wK317UpEAiqwcDq1K09be", //plain pw: meowmeow
    cart: [],
  },
];
module.exports = users;
