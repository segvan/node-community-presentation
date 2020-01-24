const express = require("express");
const routing = require("./routing");

const app = express();
app.use(routing);
app.listen(5001);
