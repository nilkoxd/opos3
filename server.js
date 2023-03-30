const express = require('express');
const path = require('path');
const Discord = require('discord.js');

const app = express();
const port = process.env.PORT || 3000;
const client = new Discord.Client();

// handle bot ready event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// handle bot error event
client.on('error', console.error);

// handle incoming messages
client.on('message', message => {
  // your message handling logic here
});

// start the bot
client.login(process.env.DISCORD_TOKEN);

// serve the static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// handle GET request to /status endpoint
app.get('/status', (req, res) => {
  // check if the bot is logged in
  if (client.readyAt) {
    res.status(200).send({ status: 'online' });
  } else {
    res.status(500).send({ status: 'offline' });
  }
});

// serve the index.html file for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
