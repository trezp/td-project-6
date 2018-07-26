const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index', { title: 'Home' })
});

app.get('/about', function (req, res) {
  res.render('about', { title: 'About'})
});

app.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact'})
});

app.get('/projects', function (req, res) {
  res.render('project', { title: 'Hey'})
});

app.get('/projects/:projectID', function (req, res) {
  const project = req.params.projectID;
  res.render('project', { title: 'Hey', message: project })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));