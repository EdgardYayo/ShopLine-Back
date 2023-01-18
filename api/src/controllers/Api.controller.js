const axios = require("axios");

const getAllProducts = async () => {
  try {
    const getApiProducts = axios.get("https://fakestoreapi.com/products");
    
    const apiProducts = await getApiProducts.map((elem) => {
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
    return apiProducts;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports= {
  getAllProducts
}
