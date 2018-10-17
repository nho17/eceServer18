var express = require('express');
var router = express.Router();
var fs = require('fs');
var User = require("../models/users");
var bcrypt = require("bcrypt-nodejs");

/* Register a new user */
router.post('/register', function(req, res, next) {

    // FIXME: Add input validation
    bcrypt.hash(req.body.password, null, null, function(err, hash) {
        // Create an entry for the user
        var newUser = new User( {
           email: req.body.email,
           fullName: req.body.fullName,
           passwordHash: hash // hashed password
        }); 
        
        newUser.save( function(err, user) {
           if (err) {
              // Error can occur if a duplicate email is sent
              res.status(400).json( {success: false, message: err.errmsg});
           }
           else {
               res.status(201).json( {success: true, message: user.fullName + " has been created."})
           }
        });
    });    
});

module.exports = router;
