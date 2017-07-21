const express = require('express')
const app = express()

const PORT_NUMBER = 8080

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port ' + PORT_NUMBER + ' !')
})
