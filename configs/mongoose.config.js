const mongoose = require('mongoose')
const session = require("express-session")
const MongoStore = require('connect-mongo')(session)


mongoose
  .connect(`${process.env.DB_REMOTE}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Conectado a mongo! nombre de la base de datos: "${x.connections[0].name}"`))
  .catch(err => console.error('Está difícil conectarse a la base de datos...', err))

module.exports = app => {
  app.use(session({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  }))
}