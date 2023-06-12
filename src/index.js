const express = require('express');
const fs = require ('fs');
const path = require ('path')
const app = express();

app.use(express.json()):
app.use(express.static('public'));

app.get('/api/users', (req, res) => {
  // Handle POST request for creating a new user
});

const port = process.env.PORT || 3000;
const apikey = process.env.API_KEY;
