const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import the 'cors' package
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Define a route to read data from the file
app.get('/getData', (req, res) => {
  // Read data from a JSON file (data.json in this example)
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Send the JSON data as the response
    res.json(jsonData);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
