import express from 'express';
import { getAllItems, createItem, updateItem, deleteItem } from '../controllers/ItemController.js';
import { getItem } from '../controllers/ItemController.js';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
