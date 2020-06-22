
// import npm modules
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import winston from 'winston';
import compression from 'compression';
import expressWinston from 'express-winston';
import winstonPapertrail from 'winston-papertrail';
import jwt from 'express-jwt';


// import custom configuration and utilities
import config from './config';
import {Log, LOG_CONST } from './utils/log';


// initialize the api
const api = express();


// initialize middleware
api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

Log.debug('Hello World');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
        default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    Log.debug('Listening on ' + bind);
}
  
var port = normalizePort(process.env.PORT || 3000);
api.set('port', port);

api.listen(port, err => {
    Log.debug('server', 'api.listen: ' + port);
    if ( err ) {
        Log.error(err);
        process.exit(1);
    }

    // TODO: require db
    require('./utils/db');

    fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
        Log.debug('server', 'routes: ' + file);
        require('./routes/' + file)(api);
    });

    Log.debug('server', 'success: ' + port);
});

api.on('error', onError); // not called
api.on('listening', onListening); // not called

Log.debug('server', 'end of file server.js');

// ignore authentication on the following routes
// api.use(
//         jwt({ secret: config.jwt.secret }).unless({
//                 path: [
//                         '/',
//                         '/auth/signup',
//                         '/auth/login',
//                         '/auth/forgot-password',
//                         '/auth/reset-password',
//                 ],
//         }),
// );


// // throw an error if a jwt is not passed in the request
// api.use((err, req, res, next) => {
//         if (err.name === 'UnauthorizedError') {
//                 res.status(401).send('Missing authentication credentials.');
//         }
// });


// // initialize our logger (in our case, winston + papertrail)
// api.use(
//         expressWinston.logger({
//                 transports: [
//                         new winston.transports.Papertrail({
//                                 host: config.logger.host,
//                                 port: config.logger.port,
//                                 level: 'error',
//                         }),
//                 ],
//                 meta: true,
//         }),
// );


// // listen on the designated port found in the configuration
// api.listen(config.server.port, err => {
//         if (err) {
//                 logger.error(err);
//                 process.exit(1);
//         }
	
// // require the database library (which instantiates a connection to mongodb)
//         require('./utils/db');
	
// // loop through all routes and dynamically require them – passing api
//         fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
//                 require('./routes/' + file)(api);
//         });
	
// // output the status of the api in the terminal
//         logger.info(`API is now running on port ${config.server.port} in ${config.env} mode`);
// });

module.exports = api;