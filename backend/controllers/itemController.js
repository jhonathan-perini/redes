import pool from '../db.js';

// Listar todos os itens
export const getAllItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM items where id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar item
export const createItem = async (req, res) => {
  const { name, quantity, min_stock, max_stock } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (name, quantity, min_stock, max_stock) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, quantity, min_stock, max_stock]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar item
export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, min_stock, max_stock } = req.body;
  try {
    await pool.query(
      'UPDATE items SET name = $1, quantity = $2, min_stock = $3, max_stock = $4 WHERE id = $5',
      [name, quantity, min_stock, max_stock, id]
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar item
export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
