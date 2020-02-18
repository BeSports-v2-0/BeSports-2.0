const express = require('express')
const router = express.Router()
const path = require('path')
const Run = require('../models/Runs.model')
const User = require('../models/User.model')

const apiHandle = require("../services/APIHandler")
const api = new apiHandle()

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.redirect('/auth/login')
}

router.get("/", isLogged, (req, res) => {
  const apiPromise = api.getAllInfo()
  const runsPromise = Run.find().populate('owner')
  Promise.all([apiPromise, runsPromise])
    .then(results => {
      console.log(results[0].data['@graph'])
      const allRuns = {
        runsApi: results[0].data['@graph'],
        runsDB: results[1]
      }
      console.log(allRuns)
      console.log(typeof (allRuns.runsApi))
      res.render("menu/runs", allRuns)
    })
    .catch(err => next(new Error(err)))
})

router.get('/new', isLogged, (req, res) => {
  res.render('menu/new-run')
})
router.post('/new', (req, res, next) => {
  const owner = req.user._id
  const {
    title,
    dtstart,
    dtend,
    cost,
    local
  } = req.body
  Run.create({
      title,
      dtstart,
      dtend,
      cost,
      local,
      owner: owner
    })

    .then(() => res.redirect('/home'))
    .catch(err => next(new Error(err)))
})


module.exports = router