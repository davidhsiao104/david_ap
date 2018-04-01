const env = process.env.NODE_ENV || 'dev';


const setting = {
	dev: {
		app: {
			name: 'Buddy SSR Server',
			port: process.env.PORT || 3000
		},
		assetsPath:'',
		logLevel:{
			console: 'debug',
			file: 'error'
		}
	}
}


module.exports = setting[env];



