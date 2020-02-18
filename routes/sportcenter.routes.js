const express = require('express')
const router = express.Router()

const apiHandle = require("../services/APIHandler")
const api = new apiHandle()

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}

router.get("/", isLogged, (req, res, ) => {
  res.render("menu/sportcenter")
})

// Api para maps
router.get('/api', (req, res, next) => {
  const a = api.getAllPolis()

    .then(allPolis => {
      console.log(allPolis)
      res.json(allPolis.data['@graph'])
    })
    .catch(err => next(err))
})

module.exports = router