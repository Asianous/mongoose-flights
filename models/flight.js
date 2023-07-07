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



// 3.Implement the following User Story:
// AAU, when viewing the list of flights, I want to click on a “detail” link displayed next to each flight to view all of the properties for that flight (show view)

// 4.Implement the following User Story:
// AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes

// 5.Implement the following User Story:
// AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight’s destinations (airport & arrival)