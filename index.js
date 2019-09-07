require('dotenv').config();
require('module-alias/register');
require('db/connect');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const pageViewRouter = require('router/pageView');
const pageRateRouter = require('router/pageRate');

const errorHandler = require('middleware/error');
const authHandler = require('middleware/auth');

const app = new Koa();
app.use(bodyParser({ strict: false }));

// Error handler
app.use(errorHandler.handler);
app.on('error', errorHandler.response);

// Check auth
app.use(authHandler);

app
	.use(pageViewRouter.routes())
	.use(pageRateRouter.routes())
	.use(pageViewRouter.allowedMethods())
	.use(pageRateRouter.allowedMethods())

app.listen(process.env.PORT, () => {
	console.log(`App start on ${process.env.PORT} port`)
});
