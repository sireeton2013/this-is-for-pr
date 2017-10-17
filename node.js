const express = require('express') // import express
const app = express() // use app from express

app.get('/', function (req, res) {
  res.send('Hello World!') // send message to user "Hello World!"
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!') // log "Example app listening on port 3000!"
})
