const express = require('express');
const app = express();

const { spawn } = require('child_process');
const path = require('path');

const bot = spawn('node', [path.join(__dirname, 'index.js')]);

bot.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

bot.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

bot.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


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
