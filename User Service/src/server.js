// server.js
const express = require('express');
const app = express();
const path = require('path');
const authorizedServiceMiddleware = require('./middleware/authorizedServices.middleware');
const methodOverride = require("method-override");
app.set("port", process.env.PORT || 4000);

const doenv = require('dotenv');
app.use(express.json());

const config = require("./config");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(authorizedServiceMiddleware);

app.use("/user", require('./routes/user.routes'));
app.use("/user", require('./routes/status.routes'));


app.use(express.static(path.join(__dirname, "public")));


module.exports = app; 