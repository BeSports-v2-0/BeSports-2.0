const express = require('express')
const router = express.Router()
const User = require('../models/User.model')

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}


router.get('/', isLogged, (req, res, next) => res.render('index'))






// router.get("/runs", isLogged, (req, res, ) => {
//   res.render("menu/runs")
// })
module.exports = router