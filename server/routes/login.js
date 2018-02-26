var express = require('express');
var router = express.Router();
var connection = require('../module/mysql/mysql');

router.post('/login',function (req,res,next) {
  var data = req.body;
  var loginUser = 'select * from loan.users where username=? && password=?';
  connection(loginUser,function (err,rows,fields) {
    console.log(rows);
    var data;
    if(rows.length == 0) {
      data = {
        "code": 20000,
        "message": "请输入正确的账号密码"
      }
    }else {
      data = {
        "code":10000,
        "message": "登陆成功,即将跳转..."
      };
    }
    res.json(data);
  },[data.username,data.password]);
});

module.exports = router;