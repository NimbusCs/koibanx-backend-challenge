require("dotenv").config({ path: __dirname + "/.env" });
const config = require("config");
const fetch = require("node-fetch");

const fetchTest = async (username, password, page, limit) => {
  const query = page !== false && limit !== false ? `?q={"page":"${page}","limit":"${limit}"}` : "";
  return fetch(`http://localhost:${config.get("port")}/api/stores${query}`, {
    headers: { Authorization: "Basic " + Buffer.from(username + ":" + password, "binary").toString("base64") },
  }).then(async (response) => {
    return await response.json();
  });
};

const postTest = (username, password, body) => {
  return fetch(`http://localhost:${config.get("port")}/api/stores`, {
    method: "POST",
    headers: { Authorization: "Basic " + Buffer.from(username + ":" + password, "binary").toString("base64"), 'Accept': 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(async (response) => {    
    return await response.status;
  });
};

describe("Get Tests", () => {
  test("Data length should be equal or less to the limit", async () => {
    const username = "test@koibanx.com";
    const password = "test123";

    const json = await fetchTest(username, password, false, false);
    
    return expect(json.data.length).toBeLessThanOrEqual(json.limit);
  });

  test("If the page does not exist, the length of the data expect to be 0", async () => {
    const username = "test@koibanx.com";
    const password = "test123";

    const json = await fetchTest(username, password, 100, 500);
    return expect(json.data.length).toBe(0);
  });

  test("If invalid parameters are passed(string), the length of the data expect to be 0", async () => {
    const username = "test@koibanx.com";
    const password = "test123";

    const json = await fetchTest(username, password, "asd", "asd");
    return expect(json.data.length).toBe(0);
  });

  test("If invalid parameters are passed(null), the length of the data expect to be equal to 0", async () => {
    const username = "test@koibanx.com";
    const password = "test123";

    const json = await fetchTest(username, password, null, null);
    return expect(json.data.length).toBe(0);
  });
});

describe("Post Tests", () => {
  test("Response Status to be Equal to 201", async () => {
    const username = "test@koibanx.com";
    const password = "test123";

    const body = {
      "name": "Tienda10011",
      "cuit": "",
      "concepts": ["c1", "c2", "c3", "c4", "c5", "c6"],
      "currentBalance": 200001,
      "active": true,
      "lastSale": new Date().toISOString(),
    };

    const status = await postTest(username, password, body);     
    return expect(status).toBe(201);
  });

  test("Response Status not to be Equal to 201", async () => {
    const username = "test@koibanx.com";
    const password = "test123";

    const body = {
      "name": null,
      "cuit": null,
      "concepts": null,
      "currentBalance": null,
      "active": null,
      "lastSale": null,
    };

    const status = await postTest(username, password, body);
    return expect(status).not.toBe(201);
  });
});