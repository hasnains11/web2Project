const express=require('express');
const config=require('config');
const app=express();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

require("./startup/db")();
require('./startup/cors')(app);
require('./startup/routes')(app);
module.exports = server;
