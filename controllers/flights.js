const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function show(req, res){
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Detial', flight});
}

async function index(req, res){
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}

function newFlight(req, res){
// const newFlight = new Flight();
// const dt = newFlight.departs;
// let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
// departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
// res.render('flights/new', { departsDate });
res.render('flights/new')
}

async function create(req, res){
for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
}
try {
    await Flight.create(req.body);
    res.redirect('/flights');
}    catch(err) {
    res.render('flights/new', {errorMsg: err.message})
}

}