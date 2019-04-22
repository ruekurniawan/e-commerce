// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const expect = chai.expect
// const app = require('../app')
// const Product =require('../models/product')
// const User = require('../models/user')
// const {sign} = require('../helpers/jwt')

// chai.use(chaiHttp)

// let token = null
// let productId = null

// before(function(done) {

//   User
//     .create({
//         fullname: "Rudy",
//         email: "rudy@SpeechGrammarList.com",
//         password: "12345"
//       })
//       .then(user => {
//         let payload = {
//           id: user._id
//         }
//         token = sign(payload)
//         console.log(token, '=====')


//         // //crate cart
//         // Cart.create({
//         //   userId: user._id
//         // })
//         /**
//          buat cart untuk menyimpan data cart yang ada baru di controller di cek
//          kembali data nya ada pa ngga pada saat dicontroller
//          */
//         let product = {
//           name: 'sepatu',
//           price: 3000,
//           stock: 1
//         }
//         // console.log(product)
//         return Product.create(product)
//       })
//       .then(dataProduct => {
//         productId = dataProduct._id
//         console.log(dataProduct,'================')
//         done()
//       })
//       .catch(err => {        
//         console.log(err);
//         done()
//       })
      
//       // console.log(token,'masuk ga')

// })

// describe.only('Cart Test', function() {
//   describe('PUT /carts', function() {
//     it('Should be return status 200 and an object cart' ,function (done) {
//       console.log(productId,'----------------'),
//       chai
//         .request(app)
//         .put('/carts')
//         .set('token', token)
//         .send({
//           productId: productId
//         })
//         .then(res => { 
//           expect(res).to.have.status(201)
//           done()
//         })
//         .catch(err=> {
//           console.log(err)
//         })
//     })
//   })

// })