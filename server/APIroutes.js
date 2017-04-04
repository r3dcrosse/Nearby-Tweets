const APIrouter = require('express').Router();

APIrouter.route('/')
  .get((request, response) => {
    console.log('Trying to make a request to the twitter API');
    response.status(200).send('Trying to make a request to the twiter API');
  });

APIrouter.route('*')
  .get((request, response) => {
    console.log('invalid api route');
    response.status(404).send('ERROR 404: API route unknown');
  });

module.exports = APIrouter;
