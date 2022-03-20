require('../db/mongoose');
const Catalog = require('../Schema/catalog');
const Users = require('../Schema/users');

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
  Users.findOneAndUpdate({ seller_id }, { catalog_id });

const createCatalog = async (seller_id, products) =>
  new Catalog({ seller_id, products }).save();

module.exports = {
  saveUser,
  checkUserExistence,
  querySellers,
  createCatalog,
  updateSellerCatalogID,
};
