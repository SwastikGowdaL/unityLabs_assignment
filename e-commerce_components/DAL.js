require('../db/mongoose');
const Catalog = require('../Schema/catalog');
const Users = require('../Schema/users');
const Orders = require('../Schema/orders');

const saveUser = async ({ name, password, user_type, auth_token }) =>
  new Users({ name, password, user_type, auth_token }).save();

const checkUserExistence = async ({ name, password }) =>
  Users.findOne(
    { name, password },
    { __v: 0, _id: 0, name: 0, password: 0, user_type: 0 }
  );

const querySellers = async () =>
  Users.find(
    { user_type: 'seller' },
    { __v: 0, password: 0, user_type: 0, auth_token: 0 }
  );

const updateSellerCatalogID = async (seller_id, catalog_id) =>
  Users.findByIdAndUpdate(seller_id, { catalog_id });

const createCatalog = async (seller_id, products) =>
  new Catalog({ seller_id, products }).save();

const queryCatalog = async (seller_id) =>
  Catalog.findOne({ seller_id }, { __v: 0 });

const createOrder = async (seller_id, buyer_id, catalog_id, products) =>
  new Orders({ seller_id, buyer_id, catalog_id, products }).save();

const queryOrders = async (seller_id) =>
  Orders.find({ seller_id }, { __v: 0, seller_id: 0 });

const queryProductDetails = async (product_id) =>
  Catalog.find(
    { products: { $elemMatch: { _id: product_id } } },
    { 'products.$': 1, _id: 0 }
  );

module.exports = {
  saveUser,
  checkUserExistence,
  querySellers,
  createCatalog,
  updateSellerCatalogID,
  queryCatalog,
  createOrder,
  queryOrders,
  queryProductDetails,
};
