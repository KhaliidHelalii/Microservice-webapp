const express = require('express');
const app = express();
const port = 3001;

const userRouter = require('./user');

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});