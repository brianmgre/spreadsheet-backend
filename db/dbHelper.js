const SpreadSheet = require("../models/spreadsheetModel");
const db = require("./config");

module.exports = {
  saveSpreadSheet: async sheet => {
    try {
      const { name, data } = sheet;
      let spreadsheet = new SpreadSheet();
      (spreadsheet.sheetName = name), (spreadsheet.sheetInfo = data);

      return await spreadsheet.save();
    } catch (err) {
      return err;
    }
  },

  getData: async id => {
    try {
      return await SpreadSheet.findOne({
        _id: id
      });
    } catch (err) {
      return err;
    }
  },

  getAllFiles: async () => {
    try {
      return await SpreadSheet.find({}, { sheetName: 1 });
    } catch (err) {
      return err;
    }
  },

  updateSheet: async sheet => {
    try {
      const { name, data } = sheet;

      return await SpreadSheet.updateOne(
        { sheetName: `${name}` },
        { $set: { sheetName: name, sheetInfo: data } },
        { upsert: true }
      );
    } catch (err) {
      return err;
    }
  }
};
