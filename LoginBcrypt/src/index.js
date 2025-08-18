const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const route = require('./routes')
const db = require('./config/db')

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

route(app);

app.engine('hbs', engine({
  extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

console.log('Path: ', path.join(__dirname, 'resources/views'));

db.connect();

app.listen(port, () => {
    console.log("Run successfully on Port: 3000 ...");
} )