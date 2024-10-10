// src/App.jsx

import React from 'react';
import Inventory from './components/Inventory';
import Transaction from './components/Transaction';

const App = () => {
  return (
    <div>
      <Inventory />
      <Transaction />
    </div>
  );
};

export default App;
