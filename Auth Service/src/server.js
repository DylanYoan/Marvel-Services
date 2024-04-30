// server.js
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");

const doenv = require('dotenv');
app.use(express.json());

app.use(express.json());
const config = require("./config");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Aquí se montan las rutas de autenticación

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.use(require('./routes/auth.routes'));
app.use(require('./routes/user.routes'));

app.use(express.static(path.join(__dirname, "public")));


module.exports = app; 