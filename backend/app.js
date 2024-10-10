// app.js

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initDb from './db.js';
import inventoryRoutes from './routes/inventory.js';
import transactionRoutes from './routes/transactions.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Para analisar JSON

// Conectar ao PostgreSQL
const db = initDb();

// Usar rotas de controle de estoque e transações
app.use('/api/inventory', inventoryRoutes(db));
app.use('/api/transactions', transactionRoutes(db)); // Adiciona as rotas de transações

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
