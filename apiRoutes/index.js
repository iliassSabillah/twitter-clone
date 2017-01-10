const userRouter = require('./userRoute');
const messageRouter = require('./messageRoute');
const tweetRouter= require('./tweetRoute');
const signinRouter = require('./signinRoute');
const followerRouter = require('./followerRoute');



module.exports = {
	userRouter:userRouter,
	messageRouter:messageRouter,
	tweetRouter: tweetRouter,
	signinRouter: signinRouter,
	followerRouter: followerRouter
};
