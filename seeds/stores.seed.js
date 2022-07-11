const logger = require('../utils/logger');
const Store = require('../models/store');

const stores = [
  {
    name: 'Tienda',
    cuit: '',
    concepts: [
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
    ],
    currentBalance: 11000,
    active: true,
    lastSale: new Date(),
  },{
    name: 'Tienda 2',
    cuit: '',
    concepts: [
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
    ],
    currentBalance: 12000,
    active: true,
    lastSale: new Date(),
  },{
    name: 'Tienda 3',
    cuit: '',
    concepts: [
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
    ],
    currentBalance: 13000,
    active: true,
    lastSale: new Date(),
  },{
    name: 'Tienda 4',
    cuit: '',
    concepts: [
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
    ],
    currentBalance: 14000,
    active: true,
    lastSale: new Date(),
  },{
    name: 'Tienda 5',
    cuit: '',
    concepts: [
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
    ],
    currentBalance: 15000,
    active: true,
    lastSale: new Date(),
  },
]

const seedStore = async () => {
  await Store.deleteMany({});
  await Store.insertMany(stores);
};

module.exports = (mongoose) => {
  seedStore().then(() => {
    mongoose.connection.close();
    logger.info('Seed created');
  });
}