import { Schema, model } from "mongoose";

const BookSchema = Schema({
  title: String,
  author: String,
  publisher: String,
  category: String,
  summery: String,
});

export default model("Book", BookSchema);
