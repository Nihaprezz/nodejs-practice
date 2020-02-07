var express = require('express');
var router = express.Router();

const users = [
  { id: 1, name: 'sergio'},
  { id: 2, name: 'billy'},
  { id: 3, name: 'joe'},
  { id: 4, name: 'dave'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
  console.log(users)
});

module.exports = router;
