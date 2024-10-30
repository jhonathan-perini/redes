// src/api.js

import axios from 'axios';

const mode = import.meta.env
const baseURL = 'http://192.168.56.102:5000/api/'
 const api = axios.create({
    baseURL,
    timeout: 100000,
    
});
export const getItems = async () => await api.get('items');
export const addItem = async (item) => await api.post('items', item);
export const updateItem = async (id, item) => await api.put(`items/${id}`, item);
export const deleteItem = async (id) => await api.delete(`items/${id}`);
export default api;
