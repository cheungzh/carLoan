var express = require ('express');
var connection = require('../module/mysql/mysql');
var router = express.Router();

router.post('/province', function (req,res,next) {
  connection('select * from loan.provinces', function (err,rows,fields) {
    var provinces = {
      "code": 10000,
      "data": rows
    };
    res.json(provinces);
  })
});

router.post('/city', function (req, res, next) {
  var data = req.body;
  var id = data.provinceId;
  if(!id) {
    var jsonData = {
      "code": 20000,
      "message": "provinceId is required"
    };
    res.json(jsonData);
  }else{
    connection('select * from loan.cities where province_id=' + id, function (err,rows,fields) {
      var cities = {
        "code": 10000,
        "data": rows
      }
      res.json(cities);
    })
  }
});
router.post('/areas', function (req, res, next) {
  var data = req.body;
  var id = data.cityId;
  if(!id) {
    var jsonData = {
      "code": 20000,
      "message": "cityId is required"
    };
    res.json(jsonData);
  }else{
    connection('select * from loan.areas where city_id=' + id, function (err,rows,fields) {
      var areas = {
        "code": 10000,
        "data": rows
    }
      res.json(areas);
    })
  }
});

module.exports = router;