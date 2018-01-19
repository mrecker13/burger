// require connection file
var connection = require("../config/connection.js");

//create the orm object
var orm = {
    // Select all records in the db
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if(err) throw(err);
            cb(result);
        });
    },
    // Insert a new record into db
    insertOne: function(table, colOne, colTwo, valOne, valTwo, cb) {
        var queryString = "INSERT INTO " + table + " (" + colOne + ", " + colTwo + ") VALUES (?, ?);";
        console.log(queryString);
        connection.query(queryString, [valOne, valTwo], function(err, result) {
            if(err) throw(err);
            cb(result);
        });
    },
    // Update a record in the db
    updateOne: function(table, conditionOne, conditionTwo, cb) {
        var queryString = "UPDATE " + table + " SET " + conditionOne + " WHERE " + conditionTwo + ";";
        connection.query(queryString, function(err, result) {
            if(err) throw(err);
            cb(result);
        });
    }
};

// Export orm for model to pick up
module.exports = orm;