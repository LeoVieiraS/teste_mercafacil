const express = require('express');

const routes = express.Router();

const ContactController = require('./controllers/ContactController');

routes.get('/varejao/contact',ContactController.indexVarejao);
routes.post('/varejao/contact',ContactController.insertVarejao);

routes.get('/macapa/contact',ContactController.indexMacapa);
routes.post('/macapa/contact',ContactController.insertMacapa);

module.exports = routes;