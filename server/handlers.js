const items = require("./data/items.json");


const getProduct = (req, res) => {
    const data = items;
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all items",
      items: data,
    });
  }

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
  }

  module.exports = {
    getProduct,
    getSingleProduct,
  };