const DAL = require('./DAL');

const retrieveSellers = async () => {
  const sellers = DAL.querySellers();
  if (!sellers) throw new Error('unable to retrieve the list of sellers');
  return sellers;
};

const retrieveCatalog = async (seller_id) => {
  const catalog = await DAL.queryCatalog(seller_id);
  if (!catalog) throw new Error('unable to retrieve seller catalog list');
  return catalog;
};

const placeOrder = async (seller_id, buyer_id, catalog_id, products) => {
  const order = await DAL.createOrder(
    seller_id,
    buyer_id,
    catalog_id,
    products
  );
  if (!order) throw new Error('unable to place order');
  return order;
};

module.exports = {
  retrieveSellers,
  retrieveCatalog,
  placeOrder,
};
