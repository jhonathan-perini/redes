// validations/itemValidation.js

export const validateItem = (req, res, next) => {
    const { name, quantity, price } = req.body;
  
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Nome é obrigatório e deve ser uma string.' });
    }
    if (quantity === undefined || typeof quantity !== 'number' || quantity < 0) {
      return res.status(400).json({ message: 'Quantidade deve ser um número não negativo.' });
    }
    if (price === undefined || typeof price !== 'number' || price < 0) {
      return res.status(400).json({ message: 'Preço deve ser um número não negativo.' });
    }
  
    next();
  };
  