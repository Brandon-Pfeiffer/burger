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

    selectAll: function(table, callback) {
        var qString = "SELECT * FROM " + table + ";";
        connection.query(qString, function(error, result) {
        if (error) {
            throw error;
        }
        callback(result);
        });
    },

    insertOne: function(table, cols, vals, callback) {
        var qString = "INSERT INTO " + table;

        qString += " (";
        qString += cols.toString();
        qString += ") VALUES (";
        qString += vals;
        qString += ") ";


        connection.query(qString, vals, function(error, result) {
        if (error) { throw error;
        }
        callback(result);
        });
    },

    updateOne: function(table, objColVals, condition, callback) {
        
        var qString = "UPDATE " + table;

        qString += " SET ";
        qString += objToSql(objColVals);
        qString += " WHERE ";
        qString += condition;


        connection.query(qString, function(error, result) {
        if (error) { throw error;
        }
        callback(result);
        });
      }
    };

module.exports = orm;