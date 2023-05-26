const express = require('express');
const app = express();
const port = 3002;

const productRouter = require('./product');

app.use(express.json());
app.use('/api/products', productRouter);

app.listen(port, () => {
  console.log(`Product catalog service listening on port ${port}`);
});