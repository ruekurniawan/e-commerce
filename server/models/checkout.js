const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkOutSchema = new Schema ({
  date: {
    type: Date,
    default: new Date
  },
  userId: {
    type: 'ObjectId',
    ref: 'User'
  },
  products: Array,
  contactInformation: Object,
  totalPrice: Number
})

let checkout = mongoose.model('checkout', checkOutSchema)

module.exports = checkout