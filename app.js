const express = require('express');
const router = require('./routes/router');

const serverConfig = require('./config/server');

const app = express();

const port = serverConfig.port;

app.use('/api', router);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})