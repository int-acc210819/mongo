const Router = require('koa-router');

const validator = require('validator/pageRate');
const action = require('action/pageRate');

const router = new Router({ prefix: '/page-rate' });

router.get('/', async (ctx) => {
	const validData = await validator(ctx.request.query);
	const result = await action.getReturnedUserList(validData);
	ctx.body = { result };
});

module.exports = router;