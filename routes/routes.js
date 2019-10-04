const express = require("express");
const router = express.Router();
const db = require("../db/dbHelper");

router.post("/save-sheet", async (req, res) => {
  try {
    const { name, data } = req.body;

    if (name && data) {
      const savedData = await db.saveSpreadSheet(req.body);
      res.status(201).json({ savedData });
    } else {
      res.status(501).json({ message: "sheetName required" });
    }
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

router.get("/data/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allData = await db.getData(id);
    res.status(201).json({ allData });
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

router.post("/data-save", async (req, res) => {
  try {
    const { name, data } = req.body;

    if (name && data) {
      const savedData = await db.updateSheet(req.body);
      res.status(201).json({ savedData });
    } else {
      res.status(501).json({ message: "sheetName required" });
    }
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

router.get("/get-data", async (req, res) => {
  try {
    const justNames = await db.getAllFiles();
    res.status(201).json({ justNames });
  } catch (err) {
    res.status(501).json({ message: err });
  }
});
module.exports = router;
