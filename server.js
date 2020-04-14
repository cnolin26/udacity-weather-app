// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;

const server = app.listen(port, listening);

function listening() {
    console.log("server is running");
    console.log(`server is running on port: ${port}`);
}

app.get('/weather-journal-app/website', function(req, res) {
    res.send(projectData);
});


app.post('/weather-journal-app/website', addInfo)

function addInfo(req, res) {
    let ndata = req.body;
    let nEntry = {
        temperature: ndata.temp,
        date: ndata._date,
        user_resp: ndata.u_resp
    }
    projectData.push(nEntry);
}