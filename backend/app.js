// app.js

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes.js';





const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json()); // Para analisar JSON



// Usar rotas de controle de estoque e transações
app.use('/api/items', itemRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
