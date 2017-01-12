import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import models from '../models';
import bodyParser from 'body-parser';
import session from 'express-session';



/* eslint-disable no-console */

const port = 2020;
const app = express();
const compiler = webpack(config);

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));




app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


models.sequelize.sync().then(()=> {
	/**
	 * Listen on provided port, on all network interfaces.
	 */

	app.listen(port, (err)=> {
		if (err) {
			console.log(err);
		} else {
			open(`http://localhost:${port}`);
		}
	});
});

app.use(session({
	secret: 'resume',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: true }
}));

app.use('/api/users', require('../apiRoutes/index').userRouter);
app.use('/api/tweets', require('../apiRoutes/index').tweetRouter);
app.use('/api/followers', require('../apiRoutes/index').followerRouter);
app.use('/api/message', require('../apiRoutes/index').messageRouter);
app.use('/api/login', require('../apiRoutes/index').loginRouter);


app.get('/*', (req, res)=> {
	res.sendFile(path.join( __dirname, '../src/index.html'));
});
