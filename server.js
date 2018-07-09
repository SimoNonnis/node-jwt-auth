const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 1234;

app.use(bodyParser.json());

app.get('/status', (req, res) => {
  const localTime = new Date().toLocaleTimeString();
  res.status(200).send(`Server time is: ${localTime}`);
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.post('/login', (req, res) => {
  const username = req.body.username;

  res.status(200).send(`Username: ${username}`);
});

app.listen(PORT, () => console.log(`App listening at ${PORT} port`));
