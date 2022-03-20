const authServices = require('./auth_services');

const registerUser = async (req, res) => {
  try {
    const { name, password, user_type } = req.body;
    const user = await authServices.registerUser({ name, password, user_type });
    res.status(201).send({
      status: 'success',
      auth_token: user.auth_token,
      name: user.name,
      user_type: user.user_type,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await authServices.loginUser({ name, password });
    res.status(200).send({ status: 'success', auth_token: user.auth_token });
  } catch (err) {
    res.status(401).send({ status: 'failed', message: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
