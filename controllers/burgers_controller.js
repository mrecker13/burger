var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(data);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.create(req.body.burger_name, req.body.devoured, function(data) {
        res.json(data);
    });
});

router.put("/api/burger/:id", function(req, res) {
    var conditionTwo = "id = " + req.params.id;
    burger.update("devoured = " + req.body.devoured, conditionTwo, function(data) {
        res.status(200).end();
    });
});

module.exports = router;