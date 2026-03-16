const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, nome: "Alberto" },
    { id: 2, nome: "Maria" }
  ]);
});

app.listen(3000, () => {
  console.log("User service rodando na porta 3000");
});