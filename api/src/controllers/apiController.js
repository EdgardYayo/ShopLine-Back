const axios = require("axios");
const products = require('../utils/products')




const getAllProducts = async () => {
  try {
    // const listProducts = Object.keys(products).pop().map(elem => {
    //   return {
    //         id: elem[id],
    //         title: elem[title],
    //         price: elem[price],
    //         category: elem[category],
    //         description: elem[description],
    //         image: elem[image],
    //         rating: elem[rating][rate],
    //       };
    // });
    // return listProducts
    const apiProducts = products.map((elem) => {
      return {
        id: elem.id,
        title: elem.title,
        price: elem.price,
        category: elem.category,
        description: elem.description,
        image: elem.image,
        rating: elem.rating.rate,
      };
    });
    return apiProducts;
  } catch (error) {
    return { error: error.message };
  }
}


module.exports = getAllProducts;