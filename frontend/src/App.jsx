import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ marginTop: 4 }}>
        <Button component={Link} to="/" variant="contained" sx={{ marginRight: 2 }}>Home</Button>
        <Button component={Link} to="/add" variant="contained">Adicionar Item</Button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </Container>
    </Router>
  );
}
