// Create web server using express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser to parse application/x-www-form-urlencoded format
app.use(bodyParser.urlencoded({ extended: false }));

// Use body-parser to parse application/json format
app.use(bodyParser.json());

// Import comments.js
const comments = require('./comments.js');

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id == id);
  res.json(comment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id == id);
  comments.splice(commentIndex, 1);
  res.json({ deleted: true });
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id == id);
  const newComment = { ...comments[commentIndex], ...req.body };
  comments.splice(commentIndex, 1, newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Path: comments.js
// Array of comments
const comments = [
  {
    id: 1,
    username: 'John',
    comment: 'Hello',
  },
  {
    id: 2,
    username: 'James',
    comment: 'Hello World',
  },
  {
    id: 3,
    username: 'Mary',
    comment: 'Hello Universe',
  },
];

module.exports = comments;
```

## 3.3. Express Router

- Express Router is a class to create modular mountable route handlers
- It is like a mini Express application, without all the bells and whistles of an express application
- Express Router is useful for creating modular route handlers to be used in
