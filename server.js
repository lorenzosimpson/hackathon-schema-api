const express = require('express')
const server = express()

const userRouter = require('./routers/users-router')
const hackathonRouter = require('./routers/hackathons-router');

server.use(express.json())
server.use('/users', userRouter)
server.use('/hackathons', hackathonRouter)

module.exports = server;