const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const route = require('./routes')
const PORT = 3000;

const app = express();
app.use(express.json());

route(app);

app.listen(PORT, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
