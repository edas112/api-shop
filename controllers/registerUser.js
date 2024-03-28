const User = require('../models/userModel');
const { postUserValidation } = require('../validation/postUserValidation');
// Bcrypt
const bcrypt = require('bcrypt');

async function registerUser(user) {
  console.log(user);

  postUserValidation(user);

  const userExists = await User.find();
  if (userExists?.length) {
    throw new Error('vartotojas jau egzistuoja');
  }

  const hachedPassword = await bcrypt.hash(user.password, 10);
  user.password = hachedPassword;

  const newUser = await User.create({
    username: user.username,
    password: hachedPassword,
  });
  newUser.save();

  return newUser;
}

module.exports = registerUser;
