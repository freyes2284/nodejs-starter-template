const express = require('express');
const winston = require('winston');
require('dotenv').config(); // Load environment variables from .env file


const app = express();
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

// Winston logger configuration
const logger =winston.creteLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console();
    new winston.transports.File({ filename: 'logs/app.log '})
  ],
});


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
