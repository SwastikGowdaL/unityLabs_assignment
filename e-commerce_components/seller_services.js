const DAL = require('./DAL');

const createCatalog = async (seller_id, products) => {
  const catalog = await DAL.createCatalog(seller_id, products);
  await DAL.updateSellerCatalogID(seller_id, catalog._id);
  if (!catalog) throw new Error('catalog creation unsuccessful');
  return catalog;
};

module.exports = {
  createCatalog,
};
