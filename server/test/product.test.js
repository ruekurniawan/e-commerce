// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const expect = chai.expect
// const app = require('../app')
// const clearProduct = require('../helpers/clearProduct')
// const User = require('../models/user')
// const {sign} = require('../helpers/jwt')

// chai.use(chaiHttp)
// let token = null

// before(function(done) {
//   clearProduct(done)
//   // User
//   //   .create({
//   //       fullname: "Rudy",
//   //       email: "rudy@SpeechGrammarList.com",
//   //       password: "12345"
//   //     })
//   //     .then(user => {
//   //       let payload = {
//   //         id: user._id
//   //       }
//   //       token = sign(payload)
//   //     })
//   //     .catch(err => {        
//   //       console.log(err);
//   //     })
// })

// after(function(done) {
//   clearProduct(done)
//   // User
//   //   .create({
//   //       fullname: "Rudy",
//   //       email: "rudy@SpeechGrammarList.com",
//   //       password: "12345"
//   //     })
//   //     .then(user => {
//   //       let payload = {
//   //         id: user._id
//   //       }
//   //       token = sign(payload)
//   //     })
//   //     .catch(err => {        
//   //       console.log(err);
//   //     })
// })

// let id = null;

// describe('Product Test', function() {
//   // console.log(id,'=====',token);
  
//   describe('POST /products', function () {
//     it('Should be return status 201 and an object product', function (done) {
//       let product = {
//         name: 'Sepatu',
//         price: 3000,
//         stock: 10
//       }
      
//       chai
//         .request(app)
//         .post('/products')
//         .set('token', token)
//         .send(product)
//         .then(res => {
//           expect(res).to.have.status(201)
//           expect(res.body).to.be.an('Object')
//           expect(res.body).to.have.property('_id')
//           expect(res.body).to.have.property('name')
//           expect(res.body).to.have.property('price')
//           expect(res.body).to.have.property('stock')
//           done()
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     })
//   })

//   describe('GET /products' , function() {
//     it('Should send an array with 200 status code', function (done) {
//       chai
//         .request(app)
//         .get('/products')
//         .then(res => {
//           expect(res).to.have.status(200)
//           expect(res.body).to.be.an('array')
//           id = res.body[0]._id
//           done()
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     })
//   })

//   describe('DELETE /poducts/:id' ,function() {
//     it('Should send array with 200 status code', function (done) {
//       console.log(id)
//       chai
//         .request(app)
//         .delete(`/products/${id}`)
//         .set('token', token)
//         .then(res => {
//           console.log(res.body)
//           expect(res).to.have.status(200)
//           expect(res.body).to.be.an('Object')
//           done()
//         })
//         .catch(err => {
//           console.log(err, 'delete')
//         })
//     })
//   })

// })
