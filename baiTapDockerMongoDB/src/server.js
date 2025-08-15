const express = require('express');
const route = require('./routes');
const db = require('./config/db');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

db.connect();

route(app);

app.listen(3000, () => 
  console.log('Server đang chạy tại http://localhost:3000')
);