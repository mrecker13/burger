var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(valOne, valTwo, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", valOne, valTwo, function(res) {
            cb(res);
        });
    },
    update: function(conditionOne, conditionTwo, cb) {
        orm.updateOne("burgers", conditionOne, conditionTwo, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;