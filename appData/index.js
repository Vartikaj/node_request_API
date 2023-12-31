const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/**
 * Express application is essentially a set of middleware and routes that define how your web server 
 * should handle incoming HTTP requests and respond to them.
 */
const app = express();
const server = require('http').Server(app);
const port = 3000;
const api = require('./api');
/**
 * THIS IS BASICALLY USED TO IMPLEMENT "HTTP" HEADER FOR SECURING OUR SITE FOR "CLICKJACKING", "CROSS-SITE-SCRIPTING" 
 */
const helmet = require('helmet');

/**
 * 
 * THIS IS USED TO CROSS- ORIGIN REQUEST BECAUSE NODE IS RUNNING ON 3000 PORT AND 
 * ANGULAR IS RUNNING ON 4200 PORT TO OVERCOME CROSS ORIGIN REQUEST WE USE THIS
 * 
 * */
// Use the CORS middleware to enable cross-origin requests
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))
app.use('/api', api)



//USE THE ROUTE IN THE MIDDLEWHARE
app.use('/admin',require('../routes/admin-route'))

//HERE WE MENTIONED ALL THE HEADERS...
// app.use((req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
// 	next();
// })

app.options('*', function(req,res){
    res.sendStatus(200);
});


server.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log('Node Endpoints Working!!')
});
module.exports = server;



