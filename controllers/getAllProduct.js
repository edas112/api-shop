const Product = require('../models/creatModel');

async function getAllProduct() {
  const response = await Product.find({});

  return response;
}

module.exports = getAllProduct;
