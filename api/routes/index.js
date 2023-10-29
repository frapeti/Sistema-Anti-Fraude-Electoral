const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
    res.render('index', {
        title: require('../package.json').name,
        description: require('../package.json').description,
        version: require('../package.json').version
    });
});

module.exports = router;