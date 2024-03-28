const User = require('../models/userModel');
const bcrypt = require('bcrypt');

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
  if (!machted) {
    throw new Error('Neteisingai ivestas slaptazodis arba prisijungimo vardas');
  }

  return 'logged in';
}

module.exports = loginUser;
