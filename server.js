const express = require('express')
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')
const path = require('path')
const pathToPublicFolder = path.resolve(__dirname, './public')
const morgan = require('morgan')
const cors = require('cors')

app.use(express.static(pathToPublicFolder))
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
)

//To show information in the console when I call the server
app.use(morgan('tiny'))

//To read a cookie
app.use(cookieParser())

//Import of the routes
const registrationRoute = require('./routes/registrationRoute')
const petRoute = require('./routes/petRoute')
const userRoute = require('./routes/userRoute')

//Use of that Routes that I imported
app.use('/', registrationRoute)
app.use('/pet', petRoute)
app.use('/user', userRoute)

module.exports = app
