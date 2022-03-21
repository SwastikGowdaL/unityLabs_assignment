const mongoose = require('mongoose');
const DAL = require('../DAL');

afterAll(() => {
  mongoose.connection.close();
});

// test('save user', async () => {
//   const user = await DAL.saveUser({
//     name: 'testing name',
//     password: 'testing password',
//     user_type: 'seller',
//     auth_token: 'testing token',
//   });
//   expect(user).not.toBeFalsy();
// });

// test('check user', async () => {
//   const userExists = await DAL.checkUserExistence({
//     name: 'testing name',
//     password: 'testing password',
//   });
//   expect(userExists).not.toBeFalsy();
// });

// test('query list of sellers', async () => {
//   const sellers = await DAL.querySellers();
//   expect(sellers).not.toBeFalsy();
// });

// test('create catalog', async () => {
//   const catalog = await DAL.createCatalog('62371ead8228340839ec47f3', [
//     { name: 'sofa', price: '20000' },
//     { name: 'bed', price: '50000' },
//   ]);
//   expect(catalog).not.toBeFalsy();
// });

// test('retrieve catalog list', async () => {
//   const catalog = await DAL.queryCatalog('62371ead8228340839ec47f3');
//   expect(catalog).not.toBeFalsy();
// });

// test('create new order', async () => {
//   const order = await DAL.createOrder(
//     '62371ead8228340839ec47f3',
//     '6237471f70f8eac305434e4a',
//     '62376a7c4548822aa58a0492',
//     ['62376a7c4548822aa58a0494', '62376a7c4548822aa58a0493']
//   );
//   expect(order).not.toBeFalsy();
// });

// test('retrieve orders', async () => {
//   const orders = await DAL.queryOrders('62371ead8228340839ec47f3');
//   expect(orders).not.toBeFalsy();
// });

test('retrieve product details', async () => {
  const productDetails = await DAL.queryProductDetails(
    '62382352f9eeaa8b3b677cd7'
  );
  console.log(JSON.stringify(productDetails));
  expect(productDetails).not.toBeFalsy();
});
