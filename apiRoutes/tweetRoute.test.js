// var expect = require('chai').expect;
// var supertest = require('supertest');
// var srcServer = require('../tools/srcServer');
// var models = require('../models');
//
// describe('Tweet tests', () => {
// // Seeds our DB to enable us to run tests
// 	before((done) => {
// 		return models.Tweet.sync({force: true})
// 			.then(() => models.Tweet.bulkCreate([
// 				{tweet: 'tweet1', UserId: '1'},
// 				{tweet: 'tweet2', UserId: '2'},
// 				{tweet: 'tweet3', UserId: '3'}
// 			]))
// 			.then(done)
// 			.catch((err) => console.log("DB Error", err))
// 	});
//
// 	  it(`'/api/tweet/:userId' should respond with all tweets by one user`, (done) => {
// 		supertest(srcServer)
// 		  .get('/api/tweet/2')
// 		  .end((err, res) => {
// 			expect(res.body).be.a('object');
// 			done();
// 		  })
// 	  });
//
// 	it(`'/api/tweet' should respond with all tweets`, (done) => {
// 		supertest(srcServer)
// 			.get('/api/tweet')
// 			.end((err, res) => {
// 				expect(res.body).be.a('array');
// 				expect(res.body.length).equal(3);
// 				done();
// 			})
// 	})
//
// })
