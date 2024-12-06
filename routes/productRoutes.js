const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Tüm ürünleri listeleme
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.status(200).json(products); 
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Failed to fetch products' }); 
  }
});

// Tek bir ürünün detayları
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); 
    if (!product) {
      return res.status(404).json({ error: 'Product not found' }); 
    }
    res.status(200).json(product);
  } catch (err) {
    console.error('Error fetching product by ID:', err.message);
    res.status(400).json({ error: 'Invalid product ID' }); 
  }
});



module.exports = router;
