const Product = require("../models/product");

class ProductController {
  static create(req, res) {
    // console.log(req.body,'XXXXXXXXXXXXXXXXXXXx')
    let image = "";
    if (req.file) {
      image = req.file.cloudStoragePublicUrl;
    }
    Product.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      image: image
    })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        console.log(err, "========");
        res.status(500).json({
          msg: `Internal Server Error`
        });
      });
  }

  static findAll(req, res) {
    Product.find({})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(er => {
        res.status(500).json({
          msg: `Internal Server Error`
        });
      });
  }

  static remove(req, res) {
    // console.log('masuk remove')
    Product.findByIdAndDelete(req.params.id)
      .then(data => {
        console.log(data, "--data");
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err, "--error");
        res.status(500).json({
          msg: `Internal Server Error`
        });
      });
  }
}

module.exports = ProductController;
