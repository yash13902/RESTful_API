const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Name must be provided"],
    trim: true,
  },
  price: {
    type: Number,
    // required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // required: [true, "Company must be provided"],
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported}`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
