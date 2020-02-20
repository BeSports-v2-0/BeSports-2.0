require('dotenv').config()
const express = require('express')
const app = express()
//-----------------------------------------------------------------------
require('./configs/mongoose.config')(app)
require('./configs/flash.config')(app)
require('./configs/preformatter.config')(app) //Esto no mover
require('./configs/middlewares.config')(app)
require('./configs/locals.config')(app)
require('./configs/passport')(app)
require('./configs/debugger.config')
require('./configs/registrerHelper.config')
//----------------------------------------------------------------------
// base url
app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/profile', require('./routes/profile.routes'))
app.use('/home', require('./routes/home.routes'))
app.use('/sportcenter', require('./routes/sportcenter.routes'))

module.exports = app