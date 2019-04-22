const express = require('express')
const router = express.Router()
const productRoutes = require('../routes/product')
const userRoutes = require('../routes/user')
const cartRoutes = require('../routes/cart')
const checkOutRoutes = require('../routes/checkout')
const {Authenticate} = require('../middleware/authentication')
const {checkProduct} = require('../middleware/checkProduct')

router.use('/users', userRoutes)
router.use(Authenticate)
router.use('/products', productRoutes)
router.use('/carts', cartRoutes)
router.use('/checkout', checkOutRoutes)

module.exports = router