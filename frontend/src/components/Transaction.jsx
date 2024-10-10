// src/components/Transaction.jsx

import React, { useState } from 'react';
import { purchaseItem, sellItem } from '../api';

const Transaction = () => {
  const [transaction, setTransaction] = useState({ itemId: 0, quantity: 0 });
  const [sale, setSale] = useState({ itemId: 0, quantity: 0 });

  const handlePurchase = async () => {
    await purchaseItem(transaction);
    setTransaction({ itemId: 0, quantity: 0 }); // Limpa os campos
  };

  const handleSale = async () => {
    await sellItem(sale);
    setSale({ itemId: 0, quantity: 0 }); // Limpa os campos
  };

  return (
    <div>
      <h1>Gerenciar Transações</h1>
      <form onSubmit={(e) => { e.preventDefault(); handlePurchase(); }}>
        <input
          type="number"
          value={transaction.itemId}
          onChange={(e) => setTransaction({ ...transaction, itemId: Number(e.target.value) })}
          placeholder="ID do Item"
          required
        />
        <input
          type="number"
          value={transaction.quantity}
          onChange={(e) => setTransaction({ ...transaction, quantity: Number(e.target.value) })}
          placeholder="Quantidade"
          required
        />
        <button type="submit">Comprar Item</button>
      </form>

      <form onSubmit={(e) => { e.preventDefault(); handleSale(); }}>
        <input
          type="number"
          value={sale.itemId}
          onChange={(e) => setSale({ ...sale, itemId: Number(e.target.value) })}
          placeholder="ID do Item"
          required
        />
        <input
          type="number"
          value={sale.quantity}
          onChange={(e) => setSale({ ...sale, quantity: Number(e.target.value) })}
          placeholder="Quantidade"
          required
        />
        <button type="submit">Vender Item</button>
      </form>
    </div>
  );
};

export default Transaction;
