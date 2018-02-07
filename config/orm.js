var connection = require("./connection.js");

function jsToSql(sq) {

  var arr = [];

  for (var key in sq) {
      if(sq.hasOwnProperty(key)) {
    arr.push(key + "=" + sq[key]);
      }
  }

  return arr.toString();
}

var orm = {

    selectAll: function(table, cb) {
        var qString = "SELECT * FROM " + table + ";";
        connection.query(qString, function(error, res) {
        if (error) {
            throw error;
        }
        cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var qString = "INSERT INTO " + table;

        qString += " (";
        qString += cols.toString();
        qString += ") VALUES ("';
        qString += vals;
        qString += ''") ';


        connection.query(qString, vals, function(error, res) {
        if (error) { throw error;
        }
        cb(res);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        
        var qString = "UPDATE " + table;

        qString += " SET ";
        qString += objToSql(objColVals);
        qString += " WHERE ";
        qString += condition;


        connection.query(qString, function(error, res) {
        if (error) { throw error;
        }
        cb(res);
        });
      }
    };

module.exports = orm;