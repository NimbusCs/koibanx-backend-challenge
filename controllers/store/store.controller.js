const Store = require("../../models/store");

const get =(req, res) => {
  let pageOptions = {
    page: req.query?.q?.page || 1,
    limit: req.query?.q?.limit || 10,
  }

  const result = Store.paginate({}, pageOptions, (err, docs) => {
    const docsMapped = docs.docs.map((element) => {
      return {
        name: element.name,
        cuit: element.cuit,
        concepts: element.concepts,
        currentBalance: element.currentBalance,
        active: element.active ? 'Si' : 'No',
        lastSale: new Date(element.lastSale).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
      }
    })
    res.status(200).send({
      data: docsMapped,
      page: docs.page,
      pages: docs.totalPages,
      limit: docs.limit,
      total: docs.totalDocs
    });
  });
}

const post = (req, res) => {
  Store.create(req.body);
  res.status(201).send();
}

module.exports = {get, post};