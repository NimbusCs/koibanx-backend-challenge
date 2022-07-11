require('dotenv').config({path:__dirname+'/.env'});

const mongoose = require('mongoose');
const express = require('express');
const config = require('config');

const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth');
const mwBasicAuth = require('./middleware/basic-auth');

const logger = require('./utils/logger');
const app = express();

mongoose.Promise = Promise;

mongoose.connect(
  `mongodb+srv://${config.get('mongodb.address')}/${config.get('mongodb.dbname')}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

require('./utils/initializer').init();

app.use(bodyParser.json());
app.use(basicAuth(mwBasicAuth));
app.use('/api', require('./routes/stores.js'));

app.listen(config.get('port'));
logger.info('API initialized on port ' + config.get('port'));

module.exports = app;