const express = require('express');

const routes = express.Router();

const ContactController = require('./controllers/ContactController');
const LoginController = require('./controllers/LoginController');
const authenticate = require('./middleware/authorization')

routes.get('/varejao/contact',authenticate.verifyJWT,ContactController.indexVarejao);
routes.post('/varejao/contact',authenticate.verifyJWT,ContactController.insertVarejao);

routes.get('/macapa/contact',authenticate.verifyJWT,ContactController.indexMacapa);
routes.post('/macapa/contact',authenticate.verifyJWT,ContactController.insertMacapa);

routes.post('/login',LoginController.login);

module.exports = routes;