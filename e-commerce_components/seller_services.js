const DAL = require('./DAL');

const createCatalog = async (seller_id, products) => {
  const catalog = await DAL.createCatalog(seller_id, products);
  const a = await DAL.updateSellerCatalogID(seller_id, catalog._id);
  if (!catalog) throw new Error('catalog creation unsuccessful');
  return catalog;
};

const retrieveOrders = async (seller_id) => {
  const orders = await DAL.queryOrders(seller_id);
  if (!orders) throw new Error('unable to retrieve orders');
  return orders;
};

const retrieveProductDetails = async (products) => {
  const productDetails = [];
  for (const product_id of products) {
    const details = await DAL.queryProductDetails(product_id);
    productDetails.push(details[0].products[0]);
  }
  return productDetails;
};

module.exports = {
  createCatalog,
  retrieveOrders,
  retrieveProductDetails,
};
