const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const uploadCloud = require('../configs/cloudinary.config')
const apiHandle = require("../services/APIHandler")

const api = new apiHandle()

router.get("/", (req, res, ) => {
  api.getAllInfo()
    .then(res => {
      console.log(res.data)
      res.render("profile/profile", {
        user: req.user,
        apidata: res.data.title
      })


    })
    .catch(err => console.log(err))

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