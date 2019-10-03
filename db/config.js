require("dotenv").config();

const url = process.env.MONGO_URL;

const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

try {
  mongoose.connect(url, options);
} catch (error) {
  handleError(error);
}
