import { addBook, findBookById } from "../db/model/Book.js";
import { addComment, findCommentByBookId } from "../db/model/Comment.js";

export const getCommentHandler = (req, res) => {
  const { id } = req.body;
  findCommentByBookId(id).then((comments) => res.json(comments));
};

export const addCommentHandler = (req, res) => {
  const { bookId } = req.body;
  if (bookId) {
    addComment(req.body).then((comment) =>
      res.json({ result: "done", data: comment })
    );
  } else {
    res.json({ result: "failed" });
  }
};
