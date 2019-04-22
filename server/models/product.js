const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  price: {
    type: Number
  },
  stock: {
    type: Number
  },
  image: String
})

let product = mongoose.model('product', productSchema)

module.exports = product