import mongoose from "mongoose";
const { model, Schema } = mongoose;

const BookSchema = Schema({
  title: String,
  author: String,
  publisher: String,
  category: String,
  summary: String,
  imageUrl: String,
});

const Book = model("Book", BookSchema);

export const findBookById = (_id) => Book.findById(_id).exec();
export const addBook = ({ title, author, publisher, category, summary }) =>
  new Book({ title, author, publisher, category, summary }).save();

export const getBooks = () => Book.find().exec();

export default Book;
