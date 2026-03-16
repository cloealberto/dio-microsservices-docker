const express = require("express");
const app = express();

app.get("/orders", (req, res) => {
  res.json([
    { id: 1, produto: "Notebook" },
    { id: 2, produto: "Mouse" }
  ]);
});

app.listen(3000, () => {
  console.log("Order service rodando na porta 3000");
});