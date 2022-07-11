const { get, post } = require('../controllers/store/store.controller');
const express = require('express');
const router = express.Router();

router.route('/stores')
  .get(get)
  .post(post)

module.exports = router;