// Bring window.fetch to Node.js
const fetch = require('node-fetch');
//
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    const response = fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${req.query.text}`)
      .then(response =>  
        response.json()
      )
      .then(body => res.send(body))
      .catch(error => console.log('error', error));
})