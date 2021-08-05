const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();
const routes = require('./routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('Running is Port :', port);
});
