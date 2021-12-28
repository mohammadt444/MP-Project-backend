const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  category: String,
  summery: String,
});

export default mongoose.model("Book", BookSchema);
