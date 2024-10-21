// src/api.js

import axios from 'axios';

const API_URL = 'http://192.168.56.101:5000/api'; // URL do seu backend

export const getItems = async () => {
  const response = await axios.get(`${API_URL}/inventory`);
  return response.data;
};

export const createItem = async (item) => {
  const response = await axios.post(`${API_URL}/inventory`, item);
  return response.data;
};

export const updateItem = async (id, item) => {
  const response = await axios.put(`${API_URL}/inventory/${id}`, item);
  return response.data;
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/inventory/${id}`);
};

export const purchaseItem = async (transaction) => {
  const response = await axios.post(`${API_URL}/transactions/purchase`, transaction);
  return response.data;
};

export const sellItem = async (transaction) => {
  const response = await axios.post(`${API_URL}/transactions/sale`, transaction);
  return response.data;
};
