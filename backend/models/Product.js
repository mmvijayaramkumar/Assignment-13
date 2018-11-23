var mongoose = require('mongoose')

var productsSchema = new mongoose.Schema({
    productid: Number,
    productName: String,
    productDescription: String,
    productUnitprice: Number
})

module.exports = mongoose.model('Product', productsSchema)