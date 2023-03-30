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
