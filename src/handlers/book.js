import { addBook, findBookById } from "../db/model/Book.js";

const keys = ["title", "author", "publisher", "category", "summery"];

export const addBookHandler = (req, res) => {
  const data = { ...req.body };
  const isComplete = keys.reduce((pre, val) => pre && !!data[val], true);
  if (isComplete) {
    addBook(data).then((data) => res.json({ result: "done", data }));
  } else {
    res.status(400).json({ result: "failed" });
  }
};

export const getBookHandler = (req, res) => {
  const { id } = req.body;
  findBookById(id).then((data) => res.json(data));
};
