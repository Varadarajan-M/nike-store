import mysql, { ConnectionOptions, Pool } from 'mysql2/promise';

const connectDb = () => {
	let pool;
	try {
		const options: ConnectionOptions = {
			host: process.env.DB_HOST,
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
		};
		pool = mysql.createPool(options);

		pool.on('connection', () => {
			console.log('Connected to MySQL database');
		});
	} catch (err: any) {
		console.log('Error connecting to database ==> ', err?.message);
	}

	return pool || {} as Pool;
};

export default connectDb();
