import express from "express";

import bookHandler from "../handlers/book.js";
import booksHandler from "../handlers/books.js";
import bookTitlesHandler from "../handlers/bookTitles.js";
import advertisementsHandler from "../handlers/advertisments.js";
import advertisementHandler from "../handlers/advertisment.js";

const router = express.Router();

router.get("/advertisements", advertisementsHandler);

router.post("/advertisement", advertisementHandler);

router.get("/book", bookHandler);

router.post("/books", booksHandler);

router.get("/bookTitles", bookTitlesHandler);

export default router;
