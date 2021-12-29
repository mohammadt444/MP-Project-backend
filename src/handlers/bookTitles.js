import { getBooks } from "../db/model/Book.js";
import * as R from "ramda";

export default (req, res) => {
  getBooks()
    .then((data) =>
      R.map((book) => ({ bookId: book._id, title: book.title }), data)
    )
    .then((data) => res.json(data));
};
