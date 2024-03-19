const { Router } = require('express');

const { getAllProduct, getProductById } = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllProduct(req.body);
    res.json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const data = await getProductById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
