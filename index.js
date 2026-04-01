const express = require("express");
const app = express();

app.use(express.json());

function calcularMetros(qtd, largura, altura) {
  const larguraFinal = largura + 0.5;
  const alturaFinal = altura + 0.5;

  const colunas = Math.floor(28 / larguraFinal);
  const linhas = Math.ceil(qtd / colunas);

  const metros = (linhas * alturaFinal) / 100;

  return Math.ceil(metros * 100) / 100;
}

app.post("/calcular", (req, res) => {
  const { quantidade, largura, altura } = req.body;

  const metros = calcularMetros(quantidade, largura, altura);

  res.json({ metros });
});

app.listen(3000, () => console.log("rodando"));
