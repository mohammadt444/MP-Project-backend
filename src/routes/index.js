import express from "express";

import bookHandler from "../handlers/book.js";
import advertisementsHandler from "../handlers/advertisments.js";

const router = express.Router();

router.get("/advertisements", advertisementsHandler);

router.post("/advertisement");

router.get("/book", bookHandler);

router.post("/books", bookHandler);

router.get("/bookTitles", bookTitlesHandler);

export default router;
