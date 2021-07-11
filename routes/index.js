const express = require('express');
const router = express.Router();

const db = require('../models/users');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const username = req.query.username;

    // Your code goes here:

    res.render('index', {});
});

module.exports = router;
