const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.post('/api/auth/register', controller.registerUser);

router.post('/api/auth/login', controller.loginUser);

router.get('/api/buyer/list-of-sellers', controller.retrieveSellers);

router.post('/api/seller/create-catalog', controller.createCatalog);

module.exports = router;
