const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: String,
});

const Product = mongoose.model('Product', productSchema);

async function postProduct(props) {
  console.log(props);

  const response = await Product.create({
    title: 'test',
    description: 'test',
    img: 'test',
  });

  return response;
}

module.exports = postProduct;
