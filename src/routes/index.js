const express = require("express");
const router = express.Router();

router.get("/advertisements", (req, res) => res.send("advertisements"));

module.exports = router;
