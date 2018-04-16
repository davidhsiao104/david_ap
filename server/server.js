'user scrict';

const express = require('express');
const path = require('path');
const ejs = require('ejs');
// global
require('isomorphic-fetch');

// global
//require('isomorphic-fetch');

// Web context init.
const app = express();
const config = require('./config/config');
const logger = require('./config/logger.js');
const ssr = require('./ssr.js').default;


// middleware register
app.use(require("morgan")("tiny", { "stream": logger.stream }));
//View engine
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs').set('views', path.resolve(__dirname, 'views'));


//Static folder
app.use(express.static(path.join(__dirname, '..', '/public/assets')));

//Echo
app.get('/hello', (req, res) => {
  res.send('world');
});

//SSR
app.use(ssr);

// HTTP server
const server = app.listen(config.app.port, () => {
  console.log(`SSR Server Started at ${config.app.port}...`);
})

module.exports = server;