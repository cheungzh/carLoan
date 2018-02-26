var express = require('express');
var router = express.Router();
var connection = require('../module/mysql/mysql');
router.post('/list', function (req, res, next) {
  // var params = req.body;
  connection('select * from loan.product_list', function (err,rows,fields) {
    var data;
    if(!err) {
      data = {
        "code": 10000,
        "data": rows
      };
    }else {
      data = {
        "code": 20000,
        "message": err.sqlMessage
      };
    }
    res.json(data);
  })
});

module.exports = router;

