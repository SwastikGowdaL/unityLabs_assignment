const authServices = require('./auth_services');
const buyerServices = require('./buyer_services');
const sellerServices = require('./seller_services');

const registerUser = async (req, res) => {
  try {
    const { name, password, user_type } = req.body;
    const user = await authServices.registerUser({ name, password, user_type });
    res.status(201).send({
      status: 'success',
      auth_token: user.auth_token,
      name: user.name,
      user_type: user.user_type,
      seller_id: user._id,
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

const retrieveSellers = async (req, res) => {
  try {
    const sellers = await buyerServices.retrieveSellers();
    res.status(200).send(sellers);
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const createCatalog = async (req, res) => {
  try {
    const { seller_id, products } = req.body;
    const catalog = await sellerServices.createCatalog(seller_id, products);
    res.status(200).send({
      status: 'success',
      seller_id: catalog.seller_id,
      products: catalog.products,
      catalog_id: catalog._id,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveCatalog = async (req, res) => {
  try {
    const { seller_id } = req.params;
    const catalog = await buyerServices.retrieveCatalog(seller_id);
    res.status(200).send({
      status: 'success',
      products: catalog.products,
      catalog_id: catalog._id,
      seller_id: catalog.seller_id,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const placeOrder = async (req, res) => {
  try {
    const { seller_id } = req.params;
    const { buyer_id, catalog_id, products } = req.body;
    const order = await buyerServices.placeOrder(
      seller_id,
      buyer_id,
      catalog_id,
      products
    );
    res.status(200).send({
      status: 'success',
      order_id: order._id,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveOrders = async (req, res) => {
  try {
    const { seller_id } = req.params;
    const orders = await sellerServices.retrieveOrders(seller_id);
    res.status(200).send({
      status: 'success',
      orders,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveProductDetails = async (req, res) => {
  try {
    const { products } = req.body;
    const productDetails = await sellerServices.retrieveProductDetails(
      products
    );
    res.status(200).send({
      status: 'success',
      productDetails,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  retrieveSellers,
  createCatalog,
  retrieveCatalog,
  placeOrder,
  retrieveOrders,
  retrieveProductDetails,
};
