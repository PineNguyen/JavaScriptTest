const express = require('express');
const route = require('./routes');
const db = require('./config/db/')
const app = express();
const PORT = 3000;

db.connect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
route(app);

app.listen(PORT, () => 
  console.log('Server is running http://localhost:3000')
);