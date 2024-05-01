if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require("express");

require('./database');

const app = require('./server');


// Server is listening
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log('URL: ', process.env.URL);
    console.log('Environment:', process.env.NODE_ENV);
  });