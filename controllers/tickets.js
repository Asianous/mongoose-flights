const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket
};

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({}).sort('seat');
    res.render('tickets/new', { flight, tickets });
  }
  