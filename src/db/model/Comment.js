import mongoose from "mongoose";
const { model, Schema } = mongoose;

const CommentSchema = Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  username: String,
  comment: String,
});

const Comment = model("Comment", CommentSchema);

export const findCommentByBookId = (bookId) => Comment.find({ bookId }).exec();

export const addComment = ({ bookId, username, comment }) =>
  new Comment({ bookId, username, comment }).save();

export default Comment;
