require('dotenv').config({path:__dirname+'/.env'});

const mongoose = require('mongoose');
const config = require('config');
const createStoresSeed = require('./seeds/stores.seed');

mongoose.Promise = Promise;

mongoose.connect(
  `mongodb+srv://${config.get("mongodb.address")}/${config.get("mongodb.dbname")}?retryWrites=true&w=majority`,

  { useNewUrlParser: true, useUnifiedTopology: true }
);

createStoresSeed(mongoose);
