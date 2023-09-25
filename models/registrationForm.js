const mongoose = require('mongoose');


const addressModel = {
    city: String,
    state: String,
    postalCode: String,
    streetAddress: String,
}

const registrationForm = new mongoose.Schema({
    // _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    address: addressModel
    
});



module.exports = mongoose.model( 'registrationForm', registrationForm );

