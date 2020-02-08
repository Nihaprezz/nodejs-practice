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
});


router.get('/:id', function(req, res){
  const id = parseInt(req.params.id) //since the req.params.id comes in as a string, it needs to be turned into an Int
  let found = users.find(user => user.id === id)

  if (!found) res.status(404).send('no record found with the id given') // handle if the id does not match a record

  res.json(found)
})


//* POST route */
router.post('/', function(req, res) {
  if (!req.body.name) {
    res.status(404).send('you must pass in a name')
  } else {
    const newData = {id: users.length+1, name: req.body.name}
    users[users.length] = newData
  
    res.json(newData)
  }
})

module.exports = router;
