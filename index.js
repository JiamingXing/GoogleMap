const path = require('path');
const express = require('express');
const request = require('request');
const app = express();


const PORT_NUMBER = 8080;
const GOOGLE_KEY = 'AIzaSyAAerCc7M_7gAWfRE1_y_Ze8deCw2JwRZg';
const NEARBY_SEARCH_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/templates/mymap.html'));
})

app.get('/nearby_search', function (req, api_res) {
  var radius = req.query.radius ? req.query.radius : 150;
  var params = {
    'key': GOOGLE_KEY,
    'location': req.query.location,
    'radius': radius,
    'type': req.query.type
  };
  request({url: NEARBY_SEARCH_URL, qs: params}, function(err, res, body) {
    if (res.statusCode == 200) {
      api_res.json(body);
    } else {
      // error handler
    }
  });
});

app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

app.listen(8080, function () {
  console.log('Example app listening on port ' + PORT_NUMBER + ' !')
})
