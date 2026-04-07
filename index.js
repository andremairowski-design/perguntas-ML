import express from "express";

const app = express();
app.use(express.json());

// rota teste
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// rota pergunta
app.post("/pergunta", (req, res) => {
  const pergunta = req.body.pergunta;

  res.json({
    resposta: `Recebi: ${pergunta}`
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
