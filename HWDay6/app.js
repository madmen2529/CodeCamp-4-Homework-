var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
var baseRoute = require('./baseRoute')
var crudRoute = require('./crudRoute')
app.use('/baseRoute', baseRoute)
app.use('/crudRoute', crudRoute)
app.listen(3000)