const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')

chai.use(chaiHttp)

describe('User Test', function () {
  // let user = {
  //   fullname: 'Rudy Kurniawan',
  //   email: 'rudy@gmail.com',
  //   password: '12345'
  // }

  // describe('POST /users/register', function () {
  //   it('Should be return status 201 and an object user', function (done) {
  //     chai
  //       .request(app)
  //       .post('/users/register')
  //       .send(user)
  //       .then(res => {
  //           // console.log(res.body)
  //           expect(res).to.have.status(201)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('_id')
  //           expect(res.body).to.have.property('fullname')
  //           expect(res.body).to.have.property('email')
  //           expect(res.body).to.have.property('password')
  //           done()
  //         })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }),

  //   it('Should be return status 500 and an object user', function (done) {
  //     let user = {
  //       fullname: '',
  //       email: 'rudy@gmail.com',
  //       password: '12345'
  //     }
  //     chai
  //       .request(app)
  //       .post('/users/register')
  //       .send(user)
  //       .then(res => {
  //           // console.log(res.body)
  //           expect(res).to.have.status(500)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('_id')
  //           expect(res.body).to.have.property('fullname')
  //           expect(res.body).to.have.property('email')
  //           expect(res.body).to.have.property('password')
  //           done()
  //         })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }),

  //   it('Should be return status 500 and an object user', function (done) {
  //     let user = {
  //       fullname: 'Rudy Kurniawan',
  //       email: '',
  //       password: '12345'
  //     }
  //     chai
  //       .request(app)
  //       .post('/users/register')
  //       .send(user)
  //       .then(res => {
  //           // console.log(res.body)
  //           expect(res).to.have.status(500)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('_id')
  //           expect(res.body).to.have.property('fullname')
  //           expect(res.body).to.have.property('email')
  //           expect(res.body).to.have.property('password')
  //           done()
  //         })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })

  //   it('Should be return status 500 and an object user', function (done) {
  //     let user = {
  //       fullname: 'Rudy Kurniawan',
  //       email: 'rudygmail.com',
  //       password: '12345'
  //     }
  //     chai
  //       .request(app)
  //       .post('/users/register')
  //       .send(user)
  //       .then(res => {
  //           // console.log(res.body)
  //           expect(res).to.have.status(500)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('_id')
  //           expect(res.body).to.have.property('fullname')
  //           expect(res.body).to.have.property('email')
  //           expect(res.body).to.have.property('password')
  //           done()
  //         })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })

  //   it('Should be return status 500 and an object user', function (done) {
  //     let user = {
  //       fullname: 'Rudy Kurniawan',
  //       email: 'rudy@gmail.com',
  //       password: ''
  //     }
  //     chai
  //       .request(app)
  //       .post('/users/register')
  //       .send(user)
  //       .then(res => {
  //           // console.log(res.body)
  //           expect(res).to.have.status(500)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('_id')
  //           expect(res.body).to.have.property('fullname')
  //           expect(res.body).to.have.property('email')
  //           expect(res.body).to.have.property('password')
  //           done()
  //         })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })

  // })




  // describe('POST /users/login', function() {
  //   it('Should be return status 200 and an object user', function(done) {
  //     chai
  //       .request(app)
  //       .post('/users/login')
  //       .send(user)
  //       .then(res => {
  //           token = res.body.access_token
  //           // console.log(res.body)
  //           expect(res).to.have.status(200)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('access_token')      
  //           done()
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })

  //   it('Should be return status 400 and an object user', function(done) {
  //     let user = {
  //       email: 'rudygmail.com',
  //       password: '12345'
  //     }

  //     chai
  //       .request(app)
  //       .post('/users/login')
  //       .send(user)
  //       .then(res => {
  //           token = res.body.access_token
  //           // console.log(res.body)
  //           expect(res).to.have.status(400)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('access_token')      
  //           done()
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })

  //   it('Should be return status 400 and an object user', function(done) {
  //     let user = {
  //       email: 'rudy@gmail.com',
  //       password: ''
  //     }

  //     chai
  //       .request(app)
  //       .post('/users/login')
  //       .send(user)
  //       .then(res => {
  //           token = res.body.access_token
  //           // console.log(res.body)
  //           expect(res).to.have.status(500)
  //           expect(res.body).to.be.an('Object')
  //           expect(res.body).to.have.property('access_token')      
  //           done()
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })

  // })

})