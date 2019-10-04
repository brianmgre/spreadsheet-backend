const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpreadSheetSchema = Schema({
  sheetName: {
    type: String,
    required: true,
    unique: true
  },
  sheetInfo: {
    type: Map,
    required: true
  }
});

SpreadSheet = module.exports = mongoose.model("SpreadSheet", SpreadSheetSchema);
