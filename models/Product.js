const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  vendor: {
    name: String,
  },
  series: {
    name: String,
    item_quantity: Number,
  },
  description_details: Object,
  main_image: String,
  images: [String],
  price: Number,
  names: Object,
  product_code: String,
});

module.exports = mongoose.model('Product', ProductSchema);
