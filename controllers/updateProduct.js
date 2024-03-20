const { Types } = require('mongoose');
const {
  updateproductValidation,
} = require('../validation/updateproductValidation');
const Product = require('../models/creatModel');

async function updateProduct(id, body) {
  updateproductValidation(id, body);

  const updatedProduct = await Product.findByIdAndUpdate(id, body, {
    new: true,
  });

  return updatedProduct;
}

module.exports = updateProduct;
