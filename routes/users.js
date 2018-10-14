var express = require('express');
var router = express.Router();
var fs = require('fs');
var User = require("../models/users");
var bcrypt = require("bcrypt-nodejs");

/* Register a new user */
router.post('/register', function(req, res, next) {
    res.status(201).json( {success: false, message: "FIXME: Need to implement" } );
});

module.exports = router;
