const winston = require('winston');
const config = require('./config.js');


// { 
//   error: 0, 
//   warn: 1, 
//   info: 2, 
//   verbose: 3, 
//   debug: 4, 
//   silly: 5 
// }

const logger = new winston.Logger({
	transports: [
	new winston.transports.File({
		level: config.logLevel.file,
		filename: '/logs/ssr-logs.log',
		handleExceptions: true,
		json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
	new winston.transports.Console({
		level: config.logLevel.console,
		handleExceptions: true,
		json: false,
		colorize: true
	})
	],
	// exceptionHandlers: [
 //    	new transports.File({ filename: '/logs/exceptions.log' })
 //  	],
	exitOnError: false
})

logger.stream = {
	write: function(message, encoding){
		logger.info(message);
	}
};

module.exports = logger;