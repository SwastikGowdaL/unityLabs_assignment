const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  seller_id: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  ],
});

const catalog = mongoose.model('catalog', catalogSchema);

module.exports = catalog;
