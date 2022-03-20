const mongoose = require('mongoose');
const DAL = require('../DAL');

afterAll(() => {
  mongoose.connection.close();
});

test('save user', async () => {
  const user = await DAL.saveUser({
    name: 'testing name',
    password: 'testing password',
    user_type: 'seller',
    auth_token: 'testing token',
  });
  expect(user).not.toBeFalsy();
});

test('check user', async () => {
  const userExists = await DAL.checkUserExistence({
    name: 'testing name',
    password: 'testing password',
  });
  expect(userExists).not.toBeFalsy();
});

test('query list of sellers', async () => {
  const sellers = await DAL.querySellers();
  expect(sellers).not.toBeFalsy();
});

test('create catalog', async () => {
  const catalog = await DAL.createCatalog('62371ead8228340839ec47f3', [
    { name: 'sofa', price: '20000' },
    { name: 'bed', price: '50000' },
  ]);
  console.log(catalog);
  expect(catalog).not.toBeFalsy();
});
