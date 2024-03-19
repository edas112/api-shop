const Product = require('../models/creatModel');

async function getProductById(id) {
  const response = await Product.findById(id).exec();
  console.log(response);
  return response;
}

module.exports = getProductById;
