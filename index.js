const mongoose = require('mongoose');
const routes = require('./src/routes/index.js');

const express = require('express');
const server = express();

server.name = 'API';
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use( '/', routes );

server.listen(3001, () => {
    console.log('listening at 3001');
  }
);

const mostrar = () => {
  const url = 'mongodb://127.0.0.1:27017/midb';
  mongoose.connect(url)
    .then(() => console.log('Conectado a mongo'))
    .catch(err => console.log('Error ' + err));

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
};
mostrar();
module.exports = server;