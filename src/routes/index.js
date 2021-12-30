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

export default router;
