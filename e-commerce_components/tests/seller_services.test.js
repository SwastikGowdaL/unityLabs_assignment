const mongoose = require('mongoose');
const sellerServices = require('../seller_services');

afterAll(() => {
  mongoose.connection.close();
});

test('create catalog', async () => {
  const catalog = await sellerServices.createCatalog(
    '62374a5caf61e59a28e3f4bc',
    [
      { name: 'sofa', price: '20000' },
      { name: 'bed', price: '50000' },
    ]
  );
  expect(catalog).not.toBeFalsy();
});
