const APIrouter = require('express').Router();
const fakedata = require('./fakedata.js');

APIrouter.route('/')
  .get((request, response) => {
    console.log('Trying to make a request to the twitter API with coords:');
    console.log(request.query);

    // TODO: error handling for no lat/lng in request.query
    // if request.query.lat is undefined or lng is undefined

    // else make the request to the twitter API
    response.status(200).send({
      tweets: fakedata
    });
  });

APIrouter.route('*')
  .get((request, response) => {
    console.log('invalid api route');
    response.status(404).send('ERROR 404: API route unknown');
  });

module.exports = APIrouter;
