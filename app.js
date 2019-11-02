const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/movies', (req, res) => {
  res.render('movies');
});

app.get('/prices', (req, res) => {
  res.render('prices');
});

app.get('/snacks', (req, res) => {
  res.render('snacks');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});