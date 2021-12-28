import express from "express";
const router = express.Router();

router.get("/advertisements", (req, res) => res.send("advertisements"));

export default router;
