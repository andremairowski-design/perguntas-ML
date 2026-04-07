app.post("/pergunta", async (req, res) => {
  const pergunta = req.body.pergunta;

  try {
    const resposta = `Recebi sua pergunta: ${pergunta}`;

    res.json({
      resposta
    });

  } catch (erro) {
    res.json({
      resposta: "Erro ao processar"
    });
  }
});
