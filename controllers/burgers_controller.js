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

router.post('/burgers/create', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.devoured);
    burgers.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
        res.redirect('/burgers');
    });
});



