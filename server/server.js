const express = require('express');
require('dotenv').config();

const userRouter = require('./routes/user');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user router
app.use('/user', userRouter);

// add 404 status code in case url cannot be found at server
app.use('*', (req, res) => res.sendStatus(404));

// global middleware error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 400;
  err.message = err.message || 'error';
  // internal logging for debugging
  console.log(err.log);

  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
