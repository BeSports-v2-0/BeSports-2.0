const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const uploadCloud = require('../configs/cloudinary.config')

router.get("/", (req, res, ) => {
  res.render("profile/profile", {
    user: req.user
  })
})

router.post('/', uploadCloud.single('phototoupload'), (req, res, next) => {
  const profilePicture = {
    name: req.file.originalname,
    path: req.file.secure_url
  }
  User.findByIdAndUpdate(req.user._id, {
      profilePicture
    }, {
      new: true
    })
    .then(x => res.redirect('/profile'))
    .catch(err => console.log('error con la foto', err))
})





module.exports = router