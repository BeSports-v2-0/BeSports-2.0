const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const favicon = require("serve-favicon");

module.exports = (app) => {
  // Middleware Setup
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(cookieParser());

  app.set("views", path.join(__dirname, "..", "views"));
  app.set("view engine", "hbs");
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(
    favicon(path.join(__dirname, "..", "public", "images", "favicon.ico"))
  );
};
