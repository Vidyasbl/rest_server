const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.listen(port, () => {
  console.log(`REST server running on port ${port}`);
});
