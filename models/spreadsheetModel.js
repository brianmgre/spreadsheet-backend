const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpreadSheet = Schema({
  sheetName: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: String,
    required: true
  }
});

Notes = module.exports = mongoose.model("SpreadSheet", SpreadSheet);
