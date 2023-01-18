const { getAllProducts } = require("../controllers/Api.controller");
const products = require("../utils/products");
const { Router } = require("express");

const router = Router();

router.get("", async (req, res) => {
  try {
    // const listProduct = getAllProducts(products);

    const apiProducts = products.map((elem) => {
      return {
        id: elem.id,
        title: elem.title,
        price: elem.price,
        category: elem.category,
        description: elem.description,
        image: elem.image,
        rating: elem.rating,
      };
    });

    res.status(200).send(apiProducts);
  } catch (error) {
    return { error: error.message };
  }
});

module.exports = router;
