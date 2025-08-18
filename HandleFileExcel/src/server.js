import express from 'express';
const app = express();
const route = require('./routes');

app.use(express.json());

route(app);

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
