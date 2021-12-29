import { addBook, getBooks } from "../db/model/Book.js";

export default (req, res) => {
  getBooks().then((data) => res.json(data));
};
