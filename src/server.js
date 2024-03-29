require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, '0.0.0.0',() => console.log('Server is running'));