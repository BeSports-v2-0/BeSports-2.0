const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => res.render('index'))






router.get("/runs", (req, res, ) => {
  res.render("menu/runs")
})
module.exports = router