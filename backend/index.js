const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Bağlantısı
mongoose.connect('mongodb://localhost:27017/mywebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch((err) => console.error('MongoDB bağlantı hatası:', err));

// API Routes
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
