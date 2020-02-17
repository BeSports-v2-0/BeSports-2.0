require('dotenv').config()
const express = require('express')
const app = express()
//-----------------------------------------------------------------------
require('./configs/preformatter.config')(app) //Esto no mover
require('./configs/middlewares.config')(app)
require('./configs/flash.config')(app)
require('./configs/locals.config')(app)
require('./configs/mongoose.config')(app)
require('./configs/passport')(app)
//----------------------------------------------------------------------
// base url
app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/profile', require('./routes/profile.routes'))
app.use('/menu', require('./routes/index.routes'))


// app.use('/profile', require('./'))


module.exports = app


// mision: dejar app en una o dos lienas, nos garantizamods el 8 xd