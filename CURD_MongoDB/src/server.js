const express = require('express');
const route = require('./routes');
const db = require('./config/db/')
const app = express();

db.connect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
route(app);

app.listen(3000, () => 
  console.log('Server is running http://localhost:3000')
);