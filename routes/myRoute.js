var express = require('express');
var router = express.Router();

var BeanModel = require('../models/beans');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res,next){
  console.log(req.body);

  BeanModel.create({
    name: req.body.name,
    tootiness: req.body.tootiness
  },
  function(err,result) {
    if(err){
      console.log(err);
    } else {
      res.send("Bean created successfully");
    }
  }
  )
})

module.exports = router;
