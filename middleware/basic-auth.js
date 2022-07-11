const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");
const logger = require('../utils/logger');

const mwBasicAuth = async (username, password, callback) => {
  const user = (await User.find({ username }))[0];

  bcrypt.compare(password, user?.password, (err, res) => {
    if (err) {
      logger.info(err);
    }
    if (res) {
      return callback(null, true);
    } else {
      return callback(null, false);
    }
  });
}

module.exports = {
  authorizer: mwBasicAuth,
  authorizeAsync: true,
  unauthorizedResponse: (req) => {
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
  }
};
