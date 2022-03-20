const express = require('express');
const ecommerceRouter = require('./e-commerce_components/router');

const app = express();
app.use(express.json());

app.use(ecommerceRouter);

module.exports = app;
