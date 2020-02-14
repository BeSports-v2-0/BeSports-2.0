const mongoose = require('mongoose')
const session = require("express-session")
const MongoStore = require('connect-mongo')(session)


mongoose
  .connect(`mongodb://localhost/${process.env.DB}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
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