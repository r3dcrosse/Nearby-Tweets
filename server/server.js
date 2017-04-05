const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

////////////////////////////////////////////////////////////////////////////////
// Config
////////////////////////////////////////////////////////////////////////////////
const port = process.env.PORT || 1337;
const APIrouter = require('./APIroutes');
const router = require('./routes');

app.use(bodyParser.json());        // parse any request body to JSON
app.use('/api/tweets', APIrouter); // Configure API routes in 'APIroutes.js'
app.use(router);                   // Configure application routes in 'routes.js'

// Serve up static files (bundle.js, css, etc.)
app.use('/public/', express.static(path.join(__dirname, '/../public')))

// Start the server
app.listen(port);
console.log('Server is listening at port: ' + port);

module.exports = app;
