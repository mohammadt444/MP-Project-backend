import express from "express";
import bookHandler from "../handlers/book.js";

const router = express.Router();

router.get("/advertisements", (req, res) => res.send("advertisements"));

router.post("/book", bookHandler);

export default router;
