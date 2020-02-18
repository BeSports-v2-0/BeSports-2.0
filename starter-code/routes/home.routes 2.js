const express = require('express')
const router = express.Router()
const path = require('path')

const apiHandle = require("../services/APIHandler")
const api = new apiHandle()

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}

router.get("/", isLogged, (req, res) => {
  api.getAllInfo()
    .then(response => {
      res.render("menu/runs", {
        user: req.user,
        runs: response.data['@graph'] //Cambiar para obtener toda la info
      })
      console.log(response.data['@graph'])
    })
    .catch(err => console.log(err))

})















module.exports = router