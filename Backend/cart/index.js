const express = require('express');
const app = express();
const port = 3004;

const cartRouter = require('./cart');

app.use(express.json());
app.use('/api/carts', cartRouter);

app.listen(port, () => {
  console.log(`Cart service listening on port ${port}`);
});