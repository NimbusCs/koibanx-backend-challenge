const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const StoreSchema = new mongoose.Schema({
  name: String,
  cuit: String,
  concepts: Array,
  currentBalance: Number,
  active: Boolean,
  lastSale: Date,
}, { timestamps: true });

StoreSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Store', StoreSchema);
