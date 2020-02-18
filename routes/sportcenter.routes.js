const express = require('express')
const router = express.Router()

const apiHandle = require("../services/APIHandler")
const api = new apiHandle()

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}

router.get("/", isLogged, (req, res, ) => {
  api.getAllPolis()
    .then(info => console.log("1"))
  res.render("menu/sportcenter")
})

module.exports = router