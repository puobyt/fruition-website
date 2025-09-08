import { Router } from 'express';

const router = Router();

// Example in-memory products
const products = [
  { id: 'paprika-extract', name: 'Paprika Extract', category: 'Natural Color', inStock: true },
  { id: 'garlic-oil', name: 'Garlic Oil', category: 'Flavor', inStock: true },
  { id: 'natural-colors', name: 'Natural Colors Blend', category: 'Natural Color', inStock: false },
];

router.get('/', (req, res) => {
  res.json({ success: true, items: products });
});

router.get('/:id', (req, res) => {
  const item = products.find(p => p.id === req.params.id);
  if (!item) return res.status(404).json({ success: false, error: 'Not found' });
  res.json({ success: true, item });
});

export default router;


