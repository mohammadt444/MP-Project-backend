import express from "express";

import { addBookHandler, getBookHandler } from "../handlers/book.js";
import booksHandler from "../handlers/books.js";
import bookTitlesHandler from "../handlers/bookTitles.js";
import advertisementsHandler from "../handlers/advertisements.js";
import {
  addAdvertisementHandler,
  getAdvertisementHandler,
} from "../handlers/advertisement.js";

import loginHandler from "../handlers/login.js";
import signupHandler from "../handlers/signup.js";
import { addCommentHandler, getCommentHandler } from "../handlers/comment.js";
import {
  fileUploadHandler,
  fileUploadMiddleware,
} from "../handlers/imageUpload.js";
import imageHandler from "../handlers/image.js";

const router = express.Router();

router.get("/advertisements", advertisementsHandler);

router.post("/advertisement", addAdvertisementHandler);

router.get("/advertisement", getAdvertisementHandler);

router.get("/book", getBookHandler);

router.post("/book", addBookHandler);

router.get("/books", booksHandler);

router.get("/bookTitles", bookTitlesHandler);

router.get("/login", loginHandler);

router.post("/signup", signupHandler);

router.get("/comment", getCommentHandler);

router.post("/comment", addCommentHandler);

router.post("/imageUpload", fileUploadMiddleware, fileUploadHandler);

router.use("/image", imageHandler);

export default router;
