const express = require('express');
const route = require('./routes');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

app.listen(3000, () => 
  console.log('Server đang chạy tại http://localhost:3000')
);