const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config(); // .env dosyasından çevresel değişkenleri yükler

const app = express();

// Veritabanı bağlantısı
connectDB();

// Middleware
app.use(express.json()); // Yerleşik JSON parse middleware
app.use(cors()); // CORS izinlerini açar

// Rotalar
app.use('/api', require('./routes/productRoutes'));

// Hata Yönetimi Middleware
app.use((err, res) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Sunucu
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
