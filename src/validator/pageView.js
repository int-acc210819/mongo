const _ = require('lodash');
const Validator = require('fastest-validator');
const CustomError = require('component/customError');

const regexList = require('src/constantList');

const validator = new Validator();

const addSchema = {
	'user-id': { type: "string", min: 3, max: 500, optional: true },
	'page-id': { type: "string", min: 3, max: 500, optional: true },
	ip: { type: "string", pattern: regexList.regex.ip, optional: true },
	browser: { type: "string", min: 3, max: 50, optional: true },
	timestamp: { type: "date", convert: true, optional: true },
};

const getCountrySchema = {
	country: { type: "string", min: 2, max: 15 },
};

const getBrowserSchema = {
	browser: { type: "string", min: 3, max: 25 },
};

const getPageSchema = {
	'page-id': { type: "string", min: 3, max: 500 },
};

const allowedAddKeys = ['user-id', 'page-id', 'ip', 'browser', 'timestamp'];
const allowedCountryKeys = ['country'];
const allowedBrowserKeys = ['browser'];
const allowedPageKeys = ['page-id'];

const main = (data, schema, allowedKeys) => {
	if (!_.isObject(data)) throw new CustomError({
		message: 'Input data should be object',
		status: 400,
		code: 1,
	});

	const check = validator.compile(schema);
	const valid = check(data);

	if (valid !== true) {
		throw new CustomError({
			message: validator.validate(data, schema),
			status: 400,
			code: 1,
		})
	}

	return _.pick(data, allowedKeys)
};

module.exports = {

	add: data => {
		const valid = main(data, addSchema, allowedAddKeys);
		const lowerCaseSource = _.omit(valid, ['timestamp', 'ip']);
		const inLowerCase = _.mapValues(lowerCaseSource, value => value.toLowerCase())
		return { ...valid, ...inLowerCase }
	},

	getByCountry: data => {
		 const valid = main(data, getCountrySchema, allowedCountryKeys);
		 return { country: valid.country.toLowerCase() }
	},

	getByBrowser: data => {
		const valid = main(data, getBrowserSchema, allowedBrowserKeys);
		return { browser: valid.browser.toLowerCase() }
	},

	getByPage: data => {
		const valid = main(data, getPageSchema, allowedPageKeys);
		return { page: valid['page-id'].toLowerCase() }
	},

};
