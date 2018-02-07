var orm = require("../config/orm.js");

var burger = {

  selectAll: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },

  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
        callback(result);
    });
  },

  updateOne: function(sqColsVals, condition, callback) {
    orm.updateOne("burgers", sqColsVals, condition, function(result) {
      callback(result);
    });
  }
};

module.exports = burger;