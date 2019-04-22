const express = require('express')
const router = express.Router()
const cartController = require('../controller/cartController')

router.get('/', cartController.cartListProduct)
router.put('/', cartController.addProduct)
router.delete('/:id', cartController.removeProduct)
// router.delete('/products', cartController.clear)

module.exports = router