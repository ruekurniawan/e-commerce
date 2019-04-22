const CheckOut = require('../models/checkout')
const Cart = require('../models/cart')
class CheckOutController {
  static createCheckOut(req, res) { 
    console.log(req.body)
    Cart.findOne({
      userId: req.user._id
    })
      .populate({ path: "product.productId", select: ["name", "price", "quantity", "image"] })
      .then(cartList => {
        let filteredCart = [];
        let totalPrice = 0;
        cartList.product.forEach(prod => {
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
        return CheckOut.create({
          userId: req.user._id,
          products: filteredCart,
          contactInformation: req.body,
          totalPrice: totalPrice
        })
      })
      .then((transaction) => {
        res.status(201).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = CheckOutController