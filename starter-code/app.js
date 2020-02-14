require('dotenv').config()
const express = require('express')
const app = express()
const flash = require("connect-flash")
app.use(flash())

require('./configs/preformatter.config')(app) //Esto no mover
require('./configs/registrerHelper.config')
require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/views.config')(app)
require('./configs/debugger.config')
require('./configs/locals.config')(app)
require('./configs/passport')(app)
require('./configs/mongoose.config')(app)

// Routes
app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
// app.use('/profile', require('./'))


module.exports = app