// routes/inventory.js

import express from 'express';
import { validateItem } from '../validations/itemValidation.js';

const router = express.Router();

const inventoryRoutes = (db) => {
  // Criar um novo item
  router.post('/', validateItem, async (req, res) => {
    const { name, quantity, price } = req.body;

    try {
      const result = await db.one(
        'INSERT INTO items(name, quantity, price) VALUES($1, $2, $3) RETURNING id',
        [name, quantity, price]
      );
      res.status(201).json({ id: result.id, name, quantity, price });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Obter todos os itens
  router.get('/', async (req, res) => {
    try {
      const items = await db.any('SELECT * FROM items');
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Atualizar um item
  router.put('/:id', validateItem, async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.result(
        'UPDATE items SET name=$1, quantity=$2, price=$3 WHERE id=$4',
        [req.body.name, req.body.quantity, req.body.price, id]
      );
      if (result.rowCount === 0) return res.status(404).json({ message: 'Item não encontrado.' });
      res.status(200).json({ message: 'Item atualizado com sucesso.' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Deletar um item
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.result('DELETE FROM items WHERE id=$1', [id]);
      if (result.rowCount === 0) return res.status(404).json({ message: 'Item não encontrado.' });
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  return router;
};

export default inventoryRoutes;
