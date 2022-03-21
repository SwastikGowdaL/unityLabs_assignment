const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.post('/api/auth/register', controller.registerUser);

router.post('/api/auth/login', controller.loginUser);

router.get('/api/buyer/list-of-sellers', controller.retrieveSellers);

router.get('/api/buyer/seller-catalog/:seller_id', controller.retrieveCatalog);

router.post('/api/buyer/create-order/:seller_id', controller.placeOrder);

router.get('/api/seller/:seller_id/orders', controller.retrieveOrders);

router.post('/api/seller/create-catalog', controller.createCatalog);

router.post('/api/seller/product-details', controller.retrieveProductDetails);

module.exports = router;
