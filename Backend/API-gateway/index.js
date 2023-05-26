const express = require('express');
const app = express();
const port = 3005;

const authRouter = require('./auth');

app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Auth service listening on port ${port}`);
});