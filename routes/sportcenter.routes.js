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
    .then(allPolis => {
      const polisInfo = allPolis.data['@graph']
      console.log(polisInfo)
      res.render("menu/sportcenter", {
        polisInfo
      })
    })

})

// Api para maps
router.get('/api', (req, res, next) => {
  api.getAllPolis()
    .then(allPolis => {
      res.json(allPolis.data['@graph'])
    })
    .catch(err => next(err))
})

module.exports = router