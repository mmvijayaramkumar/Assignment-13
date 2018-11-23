var mongoose = require('mongoose')

var cartSchema = new mongoose.Schema({
    productid: Number,
    productName: String,
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Cart', cartSchema)