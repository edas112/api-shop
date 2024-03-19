const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
