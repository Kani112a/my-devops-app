const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Hello from your DevOps project!");
});

app.listen(3000, () => console.log("App running at http://localhost:3000"));
