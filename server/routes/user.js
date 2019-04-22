const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/product', userController.product)
router.post('/register', userController.create)
router.post('/login', userController.login)
module.exports = router