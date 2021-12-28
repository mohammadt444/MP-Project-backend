const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

// API routes
app.use("/api", require("./src/routes"));

app.listen(PORT, () => console.log(`> server started on port ${PORT}`));
