var express = require('express');
var router = express.Router();
var Sinhvien  = require('../models/Sinhvien')
const sql = require('../data/dbConnect')
sql.getStudent().then(resutl => {
  console.log(resutl);
})
router.get('/', function(req, res, next) {
  res.send('add student')
});
router.get('/addstudent', function(req, res, next) {
    res.send('Thêm sinh viên'); 
});
router.post('/store', function(req, res, next) {
    //nhận dữ liệu từ addnew để thêm record vào db
});
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  res.send('Edit sinh viên' + id);
});
router.post('/update', function(req, res, next) {
    //nhận dữ liệu từ edit để cập nhật vào db
});
router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  res.send('Xóa sinh viên');
});

module.exports = router;