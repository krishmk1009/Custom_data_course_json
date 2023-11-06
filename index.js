const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/getData', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const jsonData = JSON.parse(data);

    res.json(jsonData);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
