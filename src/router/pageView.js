const Router = require('koa-router');

const validator = require('validator/pageView');
const action = require('action/pageView');

const router = new Router({ prefix: '/page-view' });

router.get('/country', async (ctx) => {
	const validData = validator.getByCountry(ctx.request.query);
	const result = await action.getByCountry(validData);
	ctx.body = { result };
});

router.get('/browser', async (ctx) => {
	const validData = validator.getByBrowser(ctx.request.query);
	const result = await action.getByBrowser(validData);
	ctx.body = { result };
});

router.get('/page', async (ctx) => {
	const validData = validator.getByPage(ctx.request.query);
	const result = await action.getByPage(validData);
	ctx.body = { result };
});

router.post('/', async (ctx) => {
	const validData = validator.add(ctx.request.body);
	const result = await action.addEvent(validData);
	ctx.body = { message: 'Event created', result };
});

module.exports = router;