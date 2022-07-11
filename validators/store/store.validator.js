const { checkSchema } = require('express-validator');

const get = checkSchema({
  q: {
    isJSON: {
      errorMessage: `Query should be a JSON`,
    },
    customSanitizer: {
      options: (value) => JSON.parse(value, typeof value),
    },
    optional: true,
  },
}, ['query']);

const post = checkSchema({
  active: {
    isBoolean: {
      errorMessage: 'It should be Boolean',
    },
    toBoolean: true,
    optional: false,
  },
  concepts: {
    isArray: {
      errorMessage: 'It should be String[]',
    },
    toArray: true,
    optional: false,
  },
  cuit: {
    isString: {
      errorMessage: 'It should be String',
    },
    optional: false,
  },
  currentBalance: {
    isNumeric: {
      errorMessage: 'It should be a number',
    },
    optional: false,
  },
  lastSale: {
    isISO8601: {
      errorMessage: 'It should be Date',
    },
    toDate: true,
    optional: false,
  },
  name: {
    isString: {
      errorMessage: 'It should be String',
    },
    optional: false,
  },
}, ['body']);

module.exports = {get, post}