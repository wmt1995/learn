var express = require('express')
var router = express.Router()


// define the add page route
router.get('/add',(req, res)=> {
  res.send('add')
})
// define the del route
router.get('/del',  (req, res)=> {
  res.send('del')
})

module.exports = router