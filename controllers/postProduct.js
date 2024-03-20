const Product = require('../models/creatModel');
const {
  postProductValidation,
} = require('../validation/postProductValidation');

async function postProduct(props) {
  console.log(props);

  postProductValidation(props);

  const response = await Product.create(props);

  return response;
}

module.exports = postProduct;
