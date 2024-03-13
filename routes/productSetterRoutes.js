const { Router } = require('express');

const { postProduct, updateProduct } = require('../controllers');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = await postProduct(req.body);
    res.json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.massage });
  }
});

router.patch('/:id', (req, res) => {
  const data = updateProduct();
  res.json(data);
});

module.exports = router;
