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

// Aquí se montan las rutas de autenticación

app.set("port", process.env.PORT || 4000);


app.use("/api", require('./routes/auth.routes'));
app.use("/api/marvel", require('./routes/marvel.routes'));
app.use("/api/users", require('./routes/user.routes'));
app.use("/api/health", require('./routes/health.routes'));
app.use("/api", require('./routes/status.routes'));

app.use(express.static(path.join(__dirname, "public")));


module.exports = app; 