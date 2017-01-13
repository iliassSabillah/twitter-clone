const userRouter = require('./userRoute');
const messageRouter = require('./messageRoute');
const tweetRouter= require('./tweetRoute');
const followerRouter = require('./followerRoute');
const loginRouter = require('./loginRoute');


module.exports = {
	userRouter: userRouter,
	messageRouter:messageRouter,
	tweetRouter: tweetRouter,
	followerRouter: followerRouter,
	loginRouter: loginRouter
};
