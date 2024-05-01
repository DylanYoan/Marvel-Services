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


app.use("/health", require('./routes/health.routes'));

app.use(express.static(path.join(__dirname, "public")));


module.exports = app; 