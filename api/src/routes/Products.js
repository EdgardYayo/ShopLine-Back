const { getAllProducts } = require("../controllers/Api.controller");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let listProduct = await getAllProducts();

    res.status(200).send(listProduct);
    
  } catch (error) {
    return { error: error.message };
  }
});

module.exports = router;
