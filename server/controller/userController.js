const User = require("../models/user");
const { compare } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");
const Cart = require("../models/cart");
const Product = require('../models/product')

class UserController {
  static product(req, res) {
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

  static create(req, res) {
    let newUser = {};
    User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || "user"
    })
      .then(user => {
        newUser = user;
        // res.status(201).json({fullname: user.fullname, email: user.email})
        return Cart.create({
          userId: user._id,
          products: [],
          totalPrice: 0
        });
      })
      .then(cart => {
        // res.status(201).json({...newUser, cartId: cart.id})
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static login(req, res) {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (user) {
          if (compare(req.body.password, user.password)) {
            let payload = {
              id: user._id
            };

            let token = sign(payload);

            res.status(200).json({
              access_token: token,
              role: user.role
            });
          } else {
            res.status(400).json({
              msg: "Invalid  Password / Username"
            });
          }
        } else {
          res.status(400).json({
            msg: "Invalid Email / Password"
          });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = UserController;
