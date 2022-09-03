const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");

require("dotenv").config();
require("./Config/db")();

require("./Config/passportConfig")(passport);

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./Router/authRouter"));

app.listen(process.env.PORT, () => {
  console.log(`포트 ${process.env.PORT}에서 서버 시작됨 `);
});
