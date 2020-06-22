import mongoose from 'mongoose';

// import config from '../../config';
// import logger from '../logger';
import {Log} from '_utils/log';

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI);

connection
	.then(db => {
		Log.debug('db',
			`Successfully connected to ${process.env.MONGODB_URI} MongoDB cluster in ${
				process.env.MONGODB_URI
			} mode.`,
		);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			Log.debug('db', 'Attempting to re-establish database connection.');
			mongoose.connect(process.env.MONGODB_URI);
		} else {
			Log.error('db', 'Error while attempting to connect to database:');
			Log.error('db', err);
		}
	});

export default connection;
