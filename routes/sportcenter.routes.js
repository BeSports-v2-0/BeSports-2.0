const express = require('express')
const router = express.Router()

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}

router.get("/", isLogged, (req, res, ) => {
  res.render("menu/sportcenter")
})

module.exports = router