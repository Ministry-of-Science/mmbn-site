/* jshint undef: true, unused: true, esversion: 6 */
/* global require, __dirname, module */



//--------------------------------------
//  Get packages
//--------------------------------------

const
  bodyParser = require("body-parser"),
  compression = require("compression"),
  cookieParser = require("cookie-parser"),
  express = require("express"),
  favicon = require("serve-favicon"),
  hbs = require("hbs"),
  logger = require("morgan"),
  minifyHTML = require("express-minify-html"),
  path = require("path"),
  routes = require("./routes/index");



//--------------------------------------
//  Initialize
//--------------------------------------

const app = express()
  .set("view engine", "html")
  .engine("html", hbs.__express)
  .set("views", path.join(__dirname, "views"))
  .set("layouts", path.join(__dirname, "views/layouts"))

  .use(favicon(path.join(__dirname, "public/favicon.ico")))

  .use(logger("dev"))
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "public")))
  .use(minifyHTML({
    override: true,
    htmlMinifier: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      keepClosingSlash: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  }))

  .use("/", routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;

  next(err);
});



//--------------------------------------
//  Error Handling
//--------------------------------------

// Development error handler, will print stacktrace
if (app.get("env") === "development") {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.render("error", {
      error: err,
      layout: "layouts/default",
      message: err.message,
      title: "Error"
    });
  });
}



// Production error handler, no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);

  res.render("error", {
    error: {},
    layout: "layouts/default",
    message: err.message,
    title: "Error"
  });
});



//--------------------------------------
//  Begin
//--------------------------------------

module.exports = app;
