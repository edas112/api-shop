const { Router } = require('express');

const { postProduct, updateProduct } = require('../controllers');

const verifyJWT = require('../middleware/verifyJWT');

const router = Router();

router.post('/', verifyJWT, async (req, res) => {
  try {
    const data = await postProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const data = await updateProduct(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
