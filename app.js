const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { projects: data.projects });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('project');
});

app.get('/projects/:projectID', (req, res) => {
  const id = req.params.projectID;
  const project = data.projects[id];
  res.render('project', {title: project.project_name, description: project.description})
});

app.listen(3000, () => console.log('Profile app listening on port 3000!'));
