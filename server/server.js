const express = require('express')
// const router = require('./routes/routes') // to be added

var server = express()

server.use(express.json())
server.use(express.static('public'))

// server.use('/api', router) // bring this in once routes defined

module.exports = server