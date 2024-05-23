
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: Number,
    category: String,
    products: [{
        id: Number,
        name: String,
        price: Number
    }]
});

const ProductModel = mongoose.model("products", categorySchema);

module.exports = { ProductModel};