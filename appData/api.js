const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


// Connecting to database
const query = 'mongodb+srv://myAtlasDBUser:myatlas-001@myatlasclusteredu.vez2qk7.mongodb.net/bank?retryWrites=true&w=majority'
//mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority

//connecting to database

mongoose.Promise = global.Promise;

mongoose.connect(query, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = router;