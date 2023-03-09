const express = require('express')
const cors = require('cors')
const data= require("./assests/data.json")

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})



app.get('/weather', function (req, res) {
    res.send(data)
  })
app.listen(3001);