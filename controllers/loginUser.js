const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function loginUser(user) {
  const { username, password } = user;
  if (!username || !password) {
    throw new Error('Netinkami duomenys');
  }

  const findUser = await User.findOne({ username });

  if (!findUser) {
    throw new Error('Vartotojas nerastas');
  }

  const machted = await bcrypt.compare(password, findUser.password);
  if (!machted) {
    throw new Error('Neteisingai ivestas slaptazodis arba prisijungimo vardas');
  }
  // create token
  const token = jwt.sign(
    {
      username: findUser.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  return { token };
}

module.exports = loginUser;
