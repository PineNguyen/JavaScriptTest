const express = require('express');
const route = require('./routes');
const db = require('./config/db');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

db.connect();

route(app);

app.listen(PORT, () => 
  console.log('Server đang chạy tại http://localhost:3000')
);