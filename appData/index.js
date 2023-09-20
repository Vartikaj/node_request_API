const express = require('express');
const bodyParser = require('body-parser');
/**
 * Express application is essentially a set of middleware and routes that define how your web server 
 * should handle incoming HTTP requests and respond to them.
 */
const app = express();
const server = require('http').Server(app);
const port = 3000;

/**
 * THIS IS BASICALLY USED TO IMPLEMENT "HTTP" HEADER FOR SECURING OUR SITE FOR "CLICKJACKING", "CROSS-SITE-SCRIPTING" 
 */
const helmet = require('helmet');


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))

//USE THE ROUTE IN THE MIDDLEWHARE
app.use('/routes/admin-route', admin-route)
app.use('/routes/doc-route')
app.use('/routes/student-route')

//HERE WE MENTIONED ALL THE HEADERS...
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
})

app.options('*', function(req,res){
    res.send(200);
});

server.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log('Node Endpoints Working!!')
});

module.exports = server;



