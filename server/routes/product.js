const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const images = require('../helpers/image')

router.post('/', images.multer.single('image'), images.sendUploadToGCS, productController.create)
router.get('/', productController.findAll)
router.delete('/:id', productController.remove)

module.exports = router