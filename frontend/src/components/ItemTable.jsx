import { useState, useEffect } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, Dialog, 
  DialogActions, DialogContent, DialogTitle, TextField, 
  Button 
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { getItems, deleteItem, updateItem } from '../api';

export default function ItemTable() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false); // Estado do modal
  const [currentItem, setCurrentItem] = useState({ id: '', name: '', quantity: '', min_stock: '', max_stock: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setOpen(true); // Abre o modal
  };

  const handleClose = () => {
    setOpen(false); // Fecha o modal
  };

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(currentItem.id, currentItem);
    fetchItems();
    handleClose();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Estoque Mínimo</TableCell>
              <TableCell>Estoque Máximo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.min_stock}</TableCell>
                <TableCell>{item.max_stock}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(item)}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item.id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal de Edição */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Item</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Nome"
            name="name"
            value={currentItem.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Quantidade"
            name="quantity"
            value={currentItem.quantity}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Estoque Mínimo"
            name="min_stock"
            value={currentItem.min_stock}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Estoque Máximo"
            name="max_stock"
            value={currentItem.max_stock}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
