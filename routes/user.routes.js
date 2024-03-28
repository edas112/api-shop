const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers');

const router = Router();

// Post user

router.post('/', async (req, res) => {
  try {
    const data = await registerUser(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

// login user

router.post('/login', async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
