const geoIp = require('geoip-lite');
const _ = require('lodash');

const Event = require('db/schema/event');

module.exports = {

	getReturnedUserList: async (data) => {
		return Event.aggregate([
			{
				$group: {
					_id: { 'user-id': '$user-id' },
					count: { $sum: 1 },
					entries: { $push: '$$ROOT' },
				}
			}
		])
	},

};