import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import api from '../api';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('items').then((response) => {
      setItems(response.data);
    });
  }, []);

  const deleteItem = (id) => {
    api.delete(`items/${id}`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <h1>Gestão de Estoque</h1>
      <Link to="/add">Adicionar Item</Link>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <Link to={`/edit/${item.id}`}>Editar</Link>
            <button onClick={() => deleteItem(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
