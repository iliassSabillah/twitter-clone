const expect = require('chai').expect;
const srcServer = require('../tools/srcServer');
const models = require('../models');
const supertest = require('supertest');

describe('Followers tests', () => {
	before(() => {
		return models.Followers.sync({force: true})
			.then(() => models.Followers.bulkCreate([
				{FollowedId: 1, FollowerId:  3},
				]))
			.then(() => done())
	});


	it(`'/followers/:username/:userId' GET should get a new user you are following`, (done) => {
		supertest(srcServer)
			.get('/api/users/followers/test1/1')
			.end((err, res) => {
				expect(res.body).be.a('array');
				expect(res.body.length).equal(1);
				done();
			});
	});

	it(`'/followers/:userId' GET should get all users who follow you`, (done) => {
		supertest(srcServer)
			.get('/api/users/followers/1')
			.end((err, res) => {
				console.log(res.body);
				expect(res.body).be.a('array');
				expect(res.body.length).equal(1);
				done();
			});
	});
});
