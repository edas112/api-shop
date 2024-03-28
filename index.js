const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const Port = 3000;

app.use(express.json());

// routes

// Be kintamonjo, nurodant kelia vietoj kintamojo
app.use(cors());
app.use('/product', require('./routes/productGetter.routes'));

// sukuriant kintamaji

const productSetterRouter = require('./routes/productSetter.routes');

app.get('/', (req, res) => res.send('Express on Vercel'));

app.use('/product', productSetterRouter);

app.use('/user', require('./routes/user.routes'));

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
