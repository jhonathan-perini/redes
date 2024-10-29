import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { addItem } from '../api';

export default function AddItem() {
  const [item, setItem] = useState({ name: '', quantity: '', min_stock: '', max_stock: '' });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(item);
    setItem({ name: '', quantity: '', min_stock: '', max_stock: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <TextField label="Nome" name="name" value={item.name} onChange={handleChange} required />
      <TextField label="Quantidade" name="quantity" value={item.quantity} onChange={handleChange} required />
      <TextField label="Estoque Mínimo" name="min_stock" value={item.min_stock} onChange={handleChange} required />
      <TextField label="Estoque Máximo" name="max_stock" value={item.max_stock} onChange={handleChange} required />
      <Button type="submit" variant="contained">Adicionar</Button>
    </Box>
  );
}
