var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (request, result) {
    result.redirect("/burgers");
});

router.get("/burgers", function (request, result) {
  burger.selectAll(function(data) {
        var burgerData = { burgers: data }

        result.render("index", burgerData);
  });
});


router.post("/burgers/insert", function(request, result) {
    burger.insertOne(req.body.burger_name, function(result) {
        console.log(result);
        result.redirect("/burgers");
  });
});


router.put("/burgers/update/:id", function(request, result) {
    var condition = "id = " + req.params.id;
      burger.updateOne({devoured: true}, condition, function() {
          result.redirect("/burgers");
          console.log(result);
          result.sendStatus(200);
  });
});

module.exports = router;