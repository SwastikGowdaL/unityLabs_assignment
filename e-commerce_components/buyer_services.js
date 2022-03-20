const DAL = require('./DAL');

const retrieveSellers = async () => {
  const sellers = DAL.querySellers();
  if (!sellers) throw new Error('unable to retrieve the list of sellers');
  return sellers;
};

module.exports = {
  retrieveSellers,
};
