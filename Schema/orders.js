const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  seller_id: {
    type: String,
    required: true,
  },
  buyer_id: {
    type: String,
    required: true,
  },
  catalog_id: {
    type: String,
    required: true,
  },
  products: [
    {
      type: String,
    },
  ],
});

const orders = mongoose.model('orders', orderSchema);

module.exports = orders;
