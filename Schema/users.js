const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  user_type: {
    type: String,
    required: true,
    lowercase: true,
  },
  auth_token: {
    type: String,
    required: true,
  },
  catalog_id: {
    type: String,
  },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
