var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');


router.get('/', function(req, res) {
    res.redirect
});

router.get('/burgers', function(req, res) {
    burgers.all(function(data)  {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});