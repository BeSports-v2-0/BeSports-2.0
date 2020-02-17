const express = require("express")
const passport = require('passport')
const router = express.Router()
const User = require("../models/User")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10


router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  })
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}))

router.get("/signup", (req, res, next) => {
  res.render("auth/signup")
})

router.post("/signup", (req, res, next) => {

  const {
    username,
    password,
    confirmPassword,
    email
  } = req.body
  if (username === "" && password === "") {
    res.render("auth/signup", {
      message: "Introduzca usuario y contaseña."
    })
    return
  }
  if (username === "") {
    res.render("auth/signup", {
      messageU: "Introduzca usuario"
    })
    return
  }
  if (password === "" || confirmPassword === "") {
    res.render("auth/signup", {
      messageC: "Introduzca contaseña."
    })
    return
  }
  if (password != confirmPassword) {
    res.render('auth/signup', {
      message: 'Las contraseñas no coinciden'
    })
    return
  }
  if (email === "") {
    res.render('auth/signup', {
      messageE: 'Introduzca correo electrónico'
    })
    return
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", {
        message: "El usuario ya existe, porfavor escoja otro."
      })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      password: hashPass,
      email
    })

    newUser.save()
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      })
  });
});
router.get("/profile", (req, res, ) => {
  res.render("auth/profile")
})

router.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

module.exports = router