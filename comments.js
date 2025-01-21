// Create web server
const express = require('express');

// Create express app
const app = express();

// Use static files
app.use(express.static('public'));

// Use JSON
app.use(express.json());

// Use query string
app.use(express.urlencoded({ extended: true }));

// Port
const port = 3000;

// Comments
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
