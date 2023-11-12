
import express from "express";

const app = express();

app.get('/health', (req, res) => {
  return res.json({ status: true });
});

app.listen(4000, () => {
 console.log('Aplicação executando!');
});