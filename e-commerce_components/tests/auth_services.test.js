const mongoose = require('mongoose');
const authService = require('../auth_services');

afterAll(() => {
  mongoose.connection.close();
});

test('register user', async () => {
  const user = await authService.registerUser({
    name: 'testing name2',
    password: 'testing password',
    user_type: 'testing user_type',
  });
  expect(user).not.toBeFalsy();
});

test('login user', async () => {
  const user = await authService.loginUser({
    name: 'testing name2',
    password: 'testing password',
  });
  expect(user).not.toBeFalsy();
});
