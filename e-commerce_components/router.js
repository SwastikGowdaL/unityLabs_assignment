const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.post('/api/auth/register', controller.registerUser);

router.post('/api/auth/login', controller.loginUser);

module.exports = router;
