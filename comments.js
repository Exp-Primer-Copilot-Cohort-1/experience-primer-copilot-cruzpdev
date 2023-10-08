// create a web server that can listen to requests on port 3000
const express = require("express");
const app = express();
const port = 3000;

// import the comments from the comments.js file
const { comments } = require("./data/comments");

// Path: comments/:id
// create a route that returns a single comment object based on the id in the path
app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find((comment) => comment._id === Number(id));
  res.json(foundComment);
});

// Path: comments
// create a route that returns all of the comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Path: comments/search
// create a route that returns all of the comments that match the searchTerm in the query string
app.get("/comments/search", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const foundComments = comments.filter((comment) =>
    comment.body.includes(searchTerm)
  );
  res.json(foundComments);
});

// Path: comments
// create a route that returns all of the comments based on the username in the path
app.get("/comments/:username", (req, res) => {
  const username = req.params.username;
  const foundComments = comments.filter((comment) =>
    comment.username.includes(username)
  );
  res.json(foundComments);
});

// Path: comments
// create a route that returns all of the comments based on the username in the path
app.get("/comments/:username", (req, res) => {
  const username = req.params.username;
  const foundComments = comments.filter((comment) =>
    comment.username.includes(username)
  );
  res.json(foundComments);
});

// Path: comments
// create a route that returns all of the comments based on the username in the path
app.get("/comments/:username", (req, res) => {
  const username = req.params.username;
  const foundComments = comments.filter((comment) =>
    comment.username.includes(username)
  );
  res.json(foundComments);
});

// Path: comments
// create a route that returns all of the comments based on the username in the path
app.get("/comments/:username", (req, res) => {
  const username = req.params.username;
  const foundComments = comments.filter((comment))

}
)