require("dotenv").config({path:__dirname+'/.env'});
const config = require("config");

const fetchTest = async (username, password, expected) => {
  return fetch(`http://localhost:${config.get("port")}/api/stores`, {
    headers: {Authorization: 'Basic ' + Buffer.from(username + ":" + password, 'binary').toString('base64')}
  }).then((response) => {
    expect(response.status).toBe(expected);
  })
}

test('Should to be truthy and pass', () => {
  const username = 'test@koibanx.com';
  const password = 'test123';

  return fetchTest(username, password, 200);
});

test('Should to be falsy by wrong passwd', () => {
  const username = 'test@koibanx.com';
  const password = 'test1234';

  return fetchTest(username, password, 401);
});

test('Should to be falsy by wrong credentials', () => {
  const username = '';
  const password = '';

  return fetchTest(username, password, 401);
});