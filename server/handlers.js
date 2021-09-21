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

const handleCompany = (req, res) => {
  //console.log(getAllCompanies().length);
  const first20 = getAllCompanies().slice(0, 20);
  res.status(200).json({
    status: 200,
    data: first20,
  });
  res.send("handle company");
};

const handleUserProfile = (params) => {};

const handleSignIn = (params) => {};

module.exports = {
  getProduct,
  getSingleProduct,
  handleCompany,
  handleUserProfile,
  handleSignIn,
};
