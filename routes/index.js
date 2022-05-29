var express = require('express');
var router = express.Router();
const sinhvien = require('../models/Sinhvien.js')

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Hello world' });
// });
router.get('/api/sinhvien',function(req,res){
  res.send(sinhvien)
})
module.exports = router;
