const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
