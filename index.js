const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const Port = 3000;

app.use(express.json());

// routes

// Be kintamonjo, nurodant kelia vietoj kintamojo

app.use('/product', require('./routes/productGetterRoutes'));

// sukuriant kintamaji

const productSetterRouter = require('./routes/productSetterRoutes');

app.use('/product', productSetterRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database conect');
  } catch (err) {
    console.log('Error', err.message);
  }
};

connectDB();

app.listen(Port, () => {
  console.log(`Server started on hhtp://localhost:${Port}`);
});
