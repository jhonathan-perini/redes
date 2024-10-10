// src/components/Inventory.jsx

import React, { useEffect, useState } from 'react';
import { getItems, createItem, deleteItem } from '../api';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, price: 0 });

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const addItem = async () => {
    await createItem(newItem);
    setNewItem({ name: '', quantity: 0, price: 0 }); // Limpa os campos
    await fetchItems();
  };

  const removeItem = async (id) => {
    await deleteItem(id);
    await fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Controle de Estoque</h1>
      <form onSubmit={(e) => { e.preventDefault(); addItem(); }}>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Nome do Item"
          required
        />
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          placeholder="Quantidade"
          required
        />
        <input
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
          placeholder="Preço"
          required
        />
        <button type="submit">Adicionar Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} - R$ {item.price}
            <button onClick={() => removeItem(item.id)}>Deletar</button>
            <button onClick={() => console.log('Editar item:', item)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
