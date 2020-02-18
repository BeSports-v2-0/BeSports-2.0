const express = require('express')
const router = express.Router()
const User = require('../models/User.model')

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}


router.get('/', (req, res, next) => res.render('index'))






router.get("/sportcenter", isLogged, (req, res, ) => {
  res.render("menu/sportcenter")
})
module.exports = router