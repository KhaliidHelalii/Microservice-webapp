const express = require('express');
const app = express();
const port = 3003;

const orderRouter = require('./order');

app.use(express.json());
app.use('/api/orders', orderRouter);

app.listen(port, () => {
  console.log(`Order service listening on port ${port}`);
});