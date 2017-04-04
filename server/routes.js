const router = require('express').Router();

router.route('/')
  .get((request, response) => {
    console.log('Making a request to the application homepage');
    response.status(200).send('HELLO WORLD');
  });

module.exports = router;
