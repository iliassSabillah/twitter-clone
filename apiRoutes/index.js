const userRouter = require('./userRoute');
const messageRouter = require('./messageRoute');
const tweetRouter= require('./tweetRoute');
const signinRouter = require('./signinRoute');

module.exports = {
	userRouter:userRouter,
	messageRouter:messageRouter,
	tweetRouter: tweetRouter,
	signinRouter: signinRouter

};
