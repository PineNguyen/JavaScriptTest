import express from 'express';
const app = express();
const route = require('./routes');
const PORT = 3000;

app.use(express.json());

route(app);

app.listen(PORT, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
