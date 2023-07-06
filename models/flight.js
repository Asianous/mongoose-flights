const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
   airport: {type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SFO', 'SJC']
    },

    arrival: {type: Date}
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {type: String,
    enum: ['American', 'Southwest', 'United', 'Frontier', 'Alaska']
    },

    airport: {type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SFO', 'SJC'],
    default: 'DEN'
    },

    flightNo: {type: Number,
    minlength: 10,
    maxlength: 9999
    },

    departs: {type: Date,
    },

    destinations: [destinationSchema]
}, {    
    timestamps: true
})

module.exports = mongoose.model('Flights', flightSchema);


// maxlength and minlength: Take a guess :)