const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    limit:Number,
    wId:Number
  },
  { timestamps: true }
);
const Products = mongoose.model('Products', productSchema)
module.exports = Products;