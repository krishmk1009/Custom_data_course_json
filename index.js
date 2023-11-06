const express = require('express');
const cors = require('cors');
const data = require('./data'); // Import the data object from data.js
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.get('/getCourses', (req, res) => {
    // Send the data object as JSON
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
