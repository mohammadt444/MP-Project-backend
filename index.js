import mongoose from "mongoose";
import express from "express";

import router from "./src/routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

// API routes
app.use("/api", router);

// mongoose.connect("mongodb://localhost:27017/MP", () =>
mongoose.connect(
  "mongodb://ujgaugaafdxstojqc6fw:bpnES8Rn27WbKVbh2YKc@b8ndawvsrdebxft-mongodb.services.clever-cloud.com:27017/b8ndawvsrdebxft",
  () => console.log("> mongoDB connected successfully")
);

app.listen(PORT, () => console.log(`> server started on port ${PORT}`));

// "build": "babel index.js -d dist",
//
