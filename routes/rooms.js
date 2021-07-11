const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/', async function(req, res, next) {
    let rooms = [];

    const userId = req.query.userId;
    
    // Your code goes here:

    res.json({
        rooms,
    })
});

module.exports = router;
