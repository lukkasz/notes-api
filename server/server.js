require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
  console.log('Server is running on port', port);
});


module.exports = {app};