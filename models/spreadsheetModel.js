const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpreadSheet = Schema({}, { strict: false });

Notes = module.exports = mongoose.model("SpreadSheet", SpreadSheet);
