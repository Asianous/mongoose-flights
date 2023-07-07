var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


//GET /flights
router.get('/', flightsCtrl.index);

//Get /flights/new
router.get('/new', flightsCtrl.new);

//Post /flights
router.post('/', flightsCtrl.create);

//Show
router.get('/:id', flightsCtrl.show);

module.exports = router;
