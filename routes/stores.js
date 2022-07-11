const { get, post } = require('../controllers/store/store.controller');
const { get:validateGet, post:validatePost } = require('../validators/store/store.validator');
const validator = require('../middleware/validator');

const express = require('express');
const router = express.Router();

router.route('/stores')
  .get(validator(validateGet), get)
  .post(validator(validatePost), post)

module.exports = router;