const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
// global
require('isomorphic-fetch');

// Web context init.
const app = express();
const config = require('./config/config');
const logger = require('./config/logger.js');


// middleware register
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("morgan")("tiny", { "stream": logger.stream }));

//use CORS
if(config.cors)
	require('./config/cors')(app);

// Routers
app.get('/', (req, res) => {
  res.send('Hello World');
})
app.use('/api', require('./controllers/proxy.js'))

// HTTP server
const server = app.listen(config.app.port, () => {
  console.log(`API Server Started at ${config.app.port}...`);
})

module.exports = server;