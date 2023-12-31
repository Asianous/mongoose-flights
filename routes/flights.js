var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


//GET /flights
router.get('/', flightsCtrl.index);

//Get /flights/new
router.get('/new', flightsCtrl.new);

//Show
router.get('/:id', flightsCtrl.show);

//Post /flights
router.post('/', flightsCtrl.create);


module.exports = router;
