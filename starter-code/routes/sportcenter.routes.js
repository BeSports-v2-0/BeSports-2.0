const express = require('express')
const router = express.Router()
const path = require('path')

//VER SI ESTA LOGEADO
const isLogged = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    return res.redirect('/auth/login')
}

router.get('/', isLogged, (req, res) => res.render('menu/sportcenter', {
    user: req.user
}))

module.exports = router

