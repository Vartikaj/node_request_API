const mongoose = require('mongoose');

const registrationForm = new mongoose.Schema({
    // _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    address: String,
    city: String,
    state: String,
    postalCode: String
});


module.exports = mongoose.model( 'registrationForm', registrationForm );

