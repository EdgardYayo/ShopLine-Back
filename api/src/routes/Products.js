const { maped, products } = require("../utils/products");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
   const { name } = req.query
  try {
    const allProducts = products.map((elem) => {
      return {
        id: elem.id,
        title: elem.title,
        price: elem.price,
        category: elem.category,
        description: elem.description,
        image: elem.image,
        rating: elem.rating.rate,
      };
    })
    if(name){
      const getByName = allProducts.filter(elem => elem.title.toLowerCase() == name.toLowerCase())
      getByName.length === 0 ?  res.status(200).send(allProducts) : res.status(200).send(getByName)
    } else {
     return res.status(200).send(allProducts);
    }
  } catch (error) {
    return { error: error.message };
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const allProducts = products.map((elem) => {
      return {
        id: elem.id,
        title: elem.title,
        price: elem.price,
        category: elem.category,
        description: elem.description,
        image: elem.image,
        rating: elem.rating.rate,
      };
    })
     if(id){
      const getById = allProducts.filter(elem => elem.id == id)
      getById.length === 0 ? res.status(404).send("no hay elementos con ese id")  : res.status(200).send(getById)
     }
  } catch (error) {
    return { error: error.message };
  }
})


module.exports = router;
