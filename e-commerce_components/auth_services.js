const jwt = require('jsonwebtoken');
const path = require('path');
const DAL = require('./DAL');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const registerUser = async ({ name, password, user_type }) => {
  const auth_token = jwt.sign({ name }, process.env.auth_sign_token);
  const userSaved = await DAL.saveUser({
    name,
    password,
    user_type,
    auth_token,
  });
  if (!userSaved) throw new Error('registration unsuccessful');
  return userSaved;
};

const loginUser = async ({ name, password }) => {
  const user = await DAL.checkUserExistence({ name, password });
  if (!user) throw new Error('login unsuccessful');
  return user;
};

module.exports = { registerUser, loginUser };
