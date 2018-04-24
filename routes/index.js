/* jshint undef: true, unused: true, esversion: 6, -W097 */
/* global require, module */



"use strict";

//--------------------------------------
//  Get packages
//--------------------------------------

const
  express = require("express"),
  router = express.Router();



//--------------------------------------
//  Custom header
//--------------------------------------

router.use((req, res, next) => {
  res.header("X-Powered-By", "Ministry of Science");
  next();
});



//--------------------------------------
//  Get homepage
//--------------------------------------

router.get("/", (req, res) => {
  res.render("index", { layout: "layouts/default", title: "Express" });
});



//--------------------------------------
//  Begin
//--------------------------------------

module.exports = router;
