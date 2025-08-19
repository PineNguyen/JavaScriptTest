const express = require('express');
const route = require('./routes');
const app = express();
const PORT = 3000;

route(app);

app.listen(PORT, () => 
  console.log('Server is running at http://localhost:3000')
);