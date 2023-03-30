const express = require('express');
const app = express();
const path = require('path');

// Endpoint dla bota
app.get('/bot', (req, res) => {
  // Tu umieszczasz kod dla pliku index.js z botem
});

// Endpoint dla strony
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start serwera
app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000');
});
