const mongoose = require('mongoose');
const buyerServices = require('../buyer_services');

afterAll(() => {
  mongoose.connection.close();
});

test('retrieve list of sellers', async () => {
  const sellers = await buyerServices.retrieveSellers();
  console.log(sellers);
  expect(sellers).not.toBeFalsy();
});
