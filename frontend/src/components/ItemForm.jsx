import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import api  from '../api.js';

function ItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [minStock, setMinStock] = useState('');
  const [maxStock, setMaxStock] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`items/${id}`).then((response) => {
        const { name, quantity, min_stock, max_stock } = response.data[0];
        setName(name);
        setQuantity(quantity);
        setMinStock(min_stock);
        setMaxStock(max_stock);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, min_stock: minStock, max_stock: maxStock };

    if (id) {
      api.put(`items/${id}`, item).then(() => navigate('/'));
    } else {
      api.post('items', item).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" required />
      <input value={minStock} onChange={(e) => setMinStock(e.target.value)} placeholder="Estoque Mínimo" />
      <input value={maxStock} onChange={(e) => setMaxStock(e.target.value)} placeholder="Estoque Máximo" />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default ItemForm;
