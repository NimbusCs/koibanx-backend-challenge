module.exports = {
  'port': 3000,
  'mongodb': {
    'username': process.env.DATABASE_USERNAME,
    'password': process.env.DATABASE_PASSWORD,
    'host': process.env.DATABASE_HOST,
    'port': process.env.DATABASE_PORT,
    'dbname': process.env.DATABASE_DBNAME,
    'address': `${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}`
  },
};
