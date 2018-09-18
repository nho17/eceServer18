var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db18", {
   useMongoClient: true,
});

module.exports = mongoose;
