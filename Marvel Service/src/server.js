// server.js
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");
const doenv = require('dotenv');
app.use(express.json());
const config = require("./config");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
const authorizedServiceMiddleware = require('./middleware/authorizedServices.middleware');
app.use(authorizedServiceMiddleware);

app.set("port", process.env.PORT || 4000);


app.use("/marvel", require('./routes/marvel.routes'));
app.use("/marvel", require('./routes/status.routes'));

app.use(express.static(path.join(__dirname, "public")));


module.exports = app; 