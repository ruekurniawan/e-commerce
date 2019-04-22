const router = require('express').Router();
const checkoutController = require('../controller/checoutController')

router.post('/', checkoutController.createCheckOut)
module.exports = router