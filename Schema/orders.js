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
  number_of_units_ordered: {
    type: Number,
    default: 1,
  },
});

const orders = mongoose.model('orders', orderSchema);

module.exports = orders;
