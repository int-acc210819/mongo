const mongoose = require('mongoose');

const option = {
	server: {
		keepAlive: 1
	},
	useNewUrlParser: true,
	useCreateIndex: true,
};

const user = process.env.MONGO_USER,
	pass = process.env.MONGO_PASSWORD,
	host = process.env.MONGO_HOST,
	database = process.env.MONGO_NAME,
	port = process.env.MONGO_PORT;

const connectionString = `mongodb://${host}:${port}/${database}`;

mongoose.connect(connectionString, option);

mongoose.connection.on('connected', () => {
	console.log(`Connected to database using next connection: ${connectionString}`)
});

mongoose.connection.on('error', err => {
	console.log(`Error while connected to database\n${err}`);
});

mongoose.connection.on('disconnected', () => {
	console.log('Database disconnected');
});

module.exports = mongoose.connection;