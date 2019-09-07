const geoIp = require('geoip-lite');
const _ = require('lodash');

const Event = require('db/schema/event');

module.exports = {
	addEvent: async (data) => {
		let country = null;
		if (_.has(data, 'ip')) {
			const geo = await geoIp.lookup(data.ip)
			country = geo.country.toLowerCase();
		}

		const event = new Event({ ...data, country });
		event.save((err, result) => {
			if (err) console.log(err);
			console.log(result);
		});

		return event;
	},

	getByCountry: ({ country }) => {
		return Event.find({ country }, (err) => {
			if (err) console.log(err);
		})
	},

	getByBrowser: ({ browser }) => {
		return Event.find({ browser }, (err) => {
			if (err) console.log(err);
		})
	},

	getByPage: ({ page }) => {
		return Event.find({ 'page-id': page }, (err) => {
			if (err) console.log(err);
		})
	},

};