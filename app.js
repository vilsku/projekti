'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This will be filled with pictures soon...');
});

app.post('/', (req, res) => {
  res.send('With this endpoint you can add pictures')
});

app.delete('/', (req, res) => {
  res.send('With this endpoint you can delete pictures')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));