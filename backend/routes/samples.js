import { Router } from 'express';

const router = Router();

// POST to request product samples
router.post('/', async (req, res) => {
  const { productId, quantity = 1, name, email, address } = req.body || {};
  if (!productId || !name || !email || !address) {
    return res.status(400).json({
      success: false,
      error: 'productId, name, email, and address are required'
    });
  }
  res.status(201).json({
    success: true,
    request: { productId, quantity, name, email, address },
    message: 'Sample request received'
  });
});

export default router;


