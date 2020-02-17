const express = require('express')
const router = express.Router()
const path = require('path')

const apiHandle = require("../services/APIHandler")

const api = new apiHandle()

router.get("/", (req, res) => {
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