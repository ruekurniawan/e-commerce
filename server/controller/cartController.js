const Cart = require("../models/cart");
const Product = require("../models/product");

class cartController {
  static addProduct(req, res) {
    // console.log(req.body, "===ini kah body");
    // console.log(req.user, "+++++++++++++++++++++++");
    let productId = req.body.productId;
    let userCart = {};
    // console.log(req.user._id, "----------");
    Cart.findOne({
      userId: req.user.id
    })
      .then(cart => {
        // console.log(cart, "=======");
        userCart = cart;
        return Product.findById(productId);
      })
      .then(product => {
        // console.log(userCart, "xxxxxxxxxx");
        if (!product) {
          return null;
        } else {
          userCart.product.push({ productId: req.body.productId, quantity: 1 });
          userCart.totalPrice += product.price;
          return userCart.save();
        }
      })
      .then(cart => {
        if (!cart) {
          res.status(400).json({
            msg: `Product Not Found`
          });
        } else {
          res.status(200).json(cart);
        }
      })
      .catch(err => {
        // console.log("************************************")
        // console.log(err);
        res.status(500).json(err);
      });
  }

  static removeProduct(req, res) {
    // console.log(req.params)
    let productId = req.params.id;
    let userCart = {};
    Cart.findOne({
      userId: req.user._id
    })
      .then(cart => {
        userCart = cart;
        return Product.findById(productId);
        // console.log(cart,'++++')
      })
      .then(product => {
        if (product) {
          // console.log(product);
          // console.log(userCart,'=========')
          let indexCart = userCart.product.findIndex(
            prod => prod.productId == productId
          );
          // console.log(indexCart)
          userCart.product.splice(indexCart, 1);
          // console.log(cart, '----')
          userCart.totalPrice -= product.price;
          return userCart.save();
        }
      })
      .then(cart => {
        res.status(200).json(cart);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static cartListProduct(req, res) {
    // console.log(req.user._id);
    Cart.findOne({
      userId: req.user._id
    })
      .populate({ path: "product.productId", select: ["name", "price", "quantity", "image"] })
      .then(cartList => {
        let filteredCart = [];
        let totalPrice = 0;
        cartList.product.forEach(prod => {
          // console.log(prod);
          let index = filteredCart.findIndex(el => {
            return el.productId == prod.productId._id;
          });
          if (index !== -1) {
            filteredCart[index].quantity += 1;
          } else {
            let newProduct = {
              quantity: 1,
              name: prod.productId.name,
              price: prod.productId.price,
              productId: prod.productId._id,
              image: prod.productId.image
            };
            filteredCart.push(newProduct);
          }
          totalPrice += prod.productId.price;
        });
        res
          .status(200)
          .json({ products: filteredCart, totalPrice: totalPrice });
        // res.json({ message: "test" });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = cartController;
