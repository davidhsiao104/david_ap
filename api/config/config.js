const env = process.env.NODE_ENV || 'dev';

const API_URL = {
	lab: 'http://buddy-ap-elb-925050356.ap-northeast-1.elb.amazonaws.com',
	ol: 'http://buddy-ap-elb-925050356.ap-northeast-1.elb.amazonaws.com',
	prod: 'http://buddy-ap-elb-925050356.ap-northeast-1.elb.amazonaws.com'
};


const setting = {
	dev: {
		app: {
			name: 'Buddy API proxy',
			port: process.env.PORT || 3001
		},
		backend:{
			domain: API_URL.lab
		},
		logLevel:{
			console: 'debug',
			file: 'error'
		}
	}
}


module.exports = setting[env];



