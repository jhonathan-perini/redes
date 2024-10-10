// validations/transactionValidation.js

export const validateTransaction = (req, res, next) => {
    const { itemId, quantity } = req.body;
  
    if (!itemId || typeof itemId !== 'number') {
      return res.status(400).json({ message: 'ID do item é obrigatório e deve ser um número.' });
    }
    if (quantity === undefined || typeof quantity !== 'number' || quantity <= 0) {
      return res.status(400).json({ message: 'Quantidade deve ser um número positivo.' });
    }
  
    next();
  };
  