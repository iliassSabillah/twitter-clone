// const expect = require('chai').expect;
// const srcServer = require('../tools/srcServer');
// const models = require('../models');
// const supertest = require('supertest');
//
// describe('Users tests', () => {
// 	before((done) => {
// 		return models.User.sync({force: true})
// 			.then(() => models.User.bulkCreate([
// 				{username: 'test0', password:  'test0',email: 'test0@gmail.com',profilePhoto:'',headerPhoto:'',website:'test0.com',birthday:'20-12-2010',location:'NY',bio:'test0'},
// 				{username: 'test1', password:  'test1',email: 'test1@gmail.com',profilePhoto:'',headerPhoto:'',website:'test1.com',birthday:'20-12-2010',location:'NY',bio:'test1'}
// 			]))
// 			.then(done)
// 			.catch((err)=> console.log(err))
// 	});
//
// 	// test GET users from users table
// 	it(`'api/users' GET should get all users`, (done) => {
// 		supertest(srcServer)
// 			.get('/api/users')
// 			.end((err, res) => {
// 				expect(res.body.length).eql(2);
// 				expect(res.body[0].username).equal(users[0].username);
// 				expect(res.body[1].username).equal(users[1].username);
// 				// done();
// 			}).then(done())
// 			.catch((err)=> console.log(err))
// 	});
//
//
//
// // // test GET user by name
// // 	it(`'api/users/:username' should get 1 user`, (done) => {
// // 		supertest(srcServer)
// // 			.get('/api/users/test1')
// // 			.end((err, res) => {
// // 				expect(res.body).be.a('array');
// // 				expect(res.body.length).equal(2);
// // 				expect(res.body[0].id).equal(2);
// // 				done();
// // 			});
// // 	});
// //
// // 	// test creating a new user
// // 	it(`'api/users' POST should post a new user to the database`, (done) => {
// // 		supertest(srcServer)
// // 			.post('/api/users')
// // 			.type('form')
// // 			.send({username: 'iliass1', password:  'pass1',email: 'iliass1@gmail.com',profilePhoto:'',headerPhoto:'',website:'iliass1.com',birthday:'20-12-2012',location:'NY',bio:'what\'sup wala'})
// // 			.end((err, res) => {
// // 				expect(res.body).exist;
// // 				expect(res.body).be.a('object');
// // 				done();
// // 			});
// // 	});
//
// });
