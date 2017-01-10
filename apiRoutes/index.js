const userRouter = require('./userRoute');
const messageRouter = require('./messageRoute');
const tweetRouter= require('./tweetRoute');
const loginRouter = require('./loginRoute');
const authRouter = require('./authRoute');
const followerRouter = require('./followerRoute');



module.exports = {
	userRouter: userRouter,
	messageRouter:messageRouter,
	tweetRouter: tweetRouter,
	loginRouter: loginRouter,
	authRouter: authRouter,
	followerRouter: followerRouter
};
