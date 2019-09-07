const infoHandler = require('./info');

module.exports = async (ctx, next) => {
	const token = ctx.request.headers['authorization'];
	if (token === process.env.ALLOW_TOKEN) {
		await next();
	} else {
		ctx.body = {
			message: 'Unauthorized',
			code: 403,
		}
	}
};