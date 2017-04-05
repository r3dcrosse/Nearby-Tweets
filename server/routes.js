const router = require('express').Router();
const path = require('path');

router.route('/')
  .get((request, response) => {
    response.status(200).sendFile(path.join(__dirname, '../index.html'));
  });

module.exports = router;
