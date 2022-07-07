const express = require("express");
const meetingRouter = require("./routes/meetingRoutes");

// setup
const app = express();
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(meetingRouter);
app.get("*", (req, res) => {
  res.render("404");
});

// listen
app.listen(8000);
