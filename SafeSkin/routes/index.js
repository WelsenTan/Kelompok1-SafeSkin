var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
    console.log('data logged')
   return res.status(200).json('success')
});

module.exports = router;
