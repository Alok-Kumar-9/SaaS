const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/connection");
const registerRouter = require("./routers/registerRouter");
const loginRouter = require("./routers/loginRouter");
const updateRouter = require("./routers/updateRouter");
const adminRouter = require("./routers/adminRouter");

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicPath));
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loginRouter);
app.use(registerRouter);
app.use(updateRouter);
app.use(adminRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/adminlogin" , (req, res) => {
    res.render("admin");
})

app.listen(PORT);
