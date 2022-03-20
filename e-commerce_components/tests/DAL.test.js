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
  console.log(sellers);
  expect(sellers).not.toBeFalsy();
});
