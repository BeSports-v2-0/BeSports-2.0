const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const uploadCloud = require("../configs/cloudinary.config");

const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.redirect("/auth/login");
};
router.get("/", isLogged, (req, res) => {
  User.findById(req.user._id)
    .populate("favs")
    .then((user) => {
      console.log(user);
      res.render("profile/profile", {
        user: user,
      });
    });
});
router.post("/", uploadCloud.single("phototoupload"), (req, res, next) => {
  const profilePicture = {
    name: req.file.originalname,
    path: req.file.secure_url,
  };
  User.findByIdAndUpdate(
    req.user._id,
    {
      profilePicture,
    },
    {
      new: true,
    }
  )
    .then((x) => res.redirect("/profile"))
    .catch((err) => console.log("error con la foto", err));
});
//changes

module.exports = router;
