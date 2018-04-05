const express = require('express')
const parser = require('body-parser')
var urlencodedParser = parser.urlencoded({extended: false})

const server = express()
const port = process.env.PORT || 3000

server.use(express.static('public'))
server.use(parser.urlencoded({ extended: false }))

server.get('/', function(req, res){
    res.send("<h1> Hi you are cool </h1>")
  })










module.exports = server