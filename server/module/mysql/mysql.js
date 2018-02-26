function connectSQL(sqlAry,fn,parmas) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    port: "3306",
    user: "root",
    password: ""
  });
  connection.connect();
  if(!Array.isArray(sqlAry)) {
    connection.query(sqlAry, parmas, function (err, rows, fields) {
      if (err) return fn.call(this, err, rows, fields);
      var newRows = [];
      if(rows.length > 0) {
        rows.map(function (item) {
          let neItem = {};
          Object.keys(item).forEach(function (key) {
            var newKey = key.replace(/_\w/g,function ($1) {
              return $1.substr(1).toUpperCase();
            });
            neItem[newKey] = item[key];
          });
          newRows.push(neItem);
        })
      }

      return fn.call(this, err, newRows, fields);
    })
  }else{
    for(var i = 0, length = sqlAry.length; i< length; i++){
      let o = sqlAry[i];
      if(o.params) {
        connection.query(o.sql, o.params, function (err,rows,fields) {
          if (err) throw err;
          return o.fn.call(this,rows,fields);
        })
      }
  }
  }
  connection.end();
}

module.exports = connectSQL;