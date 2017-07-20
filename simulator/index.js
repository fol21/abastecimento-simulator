const express = require('express');

const app = express();
const simuladorController = require('./src/Controllers/simuladorController');

const config = require('./resources/config.json');


  app.use(config.simulador.serviceRoute, simuladorController.init(express.Router()));
  app.listen(config.simulador.port, function () {
    console.log('Listening to port ' + config.simulador.port.toString());   
  });

