const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String },
  img: { type: String },
  category: {
    type: String,
    enum: {
      values: [
        'muffins',
        'cakes',
        'breads',
        'savouries',
      ],
    },
  },
  price: { type: String },
  url: { type: String },
  featured: { type: Boolean, default: false },
});

module.exports = mongoose.model('Items', itemSchema);