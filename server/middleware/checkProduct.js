const Product = require('../models/product')

module.exports = {
  checkProduct: function (req, res, next) {
    try {
      Product
        .findById(req.body.productId)
        .then(product => {
          if(product) {
            next()
          } else {
            res.status(400).json({
              msg: `Product Not Found`
            })
          }
        })
    } catch (error) {
      res.status(500).json(err)
    }
  }
}