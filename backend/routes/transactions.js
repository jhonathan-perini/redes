// routes/transactions.js

import express from 'express';
import { validateTransaction } from '../validations/transactionValidation.js';

const router = express.Router();

const transactionRoutes = (db) => {
  // Registrar uma compra
  router.post('/purchase', validateTransaction, async (req, res) => {
    const { itemId, quantity } = req.body;

    try {
      // Atualiza a quantidade do item
      await db.none('UPDATE items SET quantity = quantity + $1 WHERE id = $2', [quantity, itemId]);
      res.status(200).json({ message: 'Compra registrada com sucesso.' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Registrar uma venda
  router.post('/sale', validateTransaction, async (req, res) => {
    const { itemId, quantity } = req.body;

    try {
      // Verifica se há quantidade suficiente
      const item = await db.one('SELECT * FROM items WHERE id = $1', [itemId]);
      if (item.quantity < quantity) {
        return res.status(400).json({ message: 'Quantidade insuficiente em estoque.' });
      }

      // Atualiza a quantidade do item
      await db.none('UPDATE items SET quantity = quantity - $1 WHERE id = $2', [quantity, itemId]);
      res.status(200).json({ message: 'Venda registrada com sucesso.' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  return router;
};

export default transactionRoutes;
