const express = require('express')
const router = express.Router()

const apiHandle = require("../services/APIHandler")

const api = new apiHandle()

router.get("/", (req, res) => {
  api.getAllInfo()
    .then(response => {
      console.log(response.data['@graph'])
      res.render("menu/runs", {
        user: req.user,
        apidata: response.data['@graph'] //Cambiar para obtener toda la info
      })
    })
    .catch(err => console.log(err))

})















module.exports = router