import { addBook } from "../db/model/Book.js";

const keys = ["title", "author", "publisher", "category", "summery"];

export default (req, res) => {
  const data = { ...req.body };
  const isComplete = keys.reduce((pre, val) => pre && !!data[val], true);
  if (isComplete) {
    addBook(data).then((data) => res.json({ result: "done", data }));
  } else {
    res.status(400).json({ result: "failed" });
  }
};
