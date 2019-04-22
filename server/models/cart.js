const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema ({
  userId: {
    type: 'ObjectId',
    ref: 'User'
  },
  product: [
    {
      productId: {
        type: 'ObjectId',
        ref: 'product'
      },
      quantity: Number
    }
  ],
  totalPrice: Number
})

let cart = mongoose.model('cart', cartSchema)

module.exports = cart