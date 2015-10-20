var express = require('express');
var router = express.Router();
var getPlacesCtrl = require('./../controllers/getPlacesCtrl')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/places/get', getPlacesCtrl);

module.exports = router;
