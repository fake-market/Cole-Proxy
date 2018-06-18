const express = require("express");
const proxy = express();
const path = require("path");
const PORT = 2222;
const bodyParser = require("body-parser");

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
proxy.use(express.static(path.join(__dirname, "../static")));

proxy.listen(PORT, () => console.log(`Proxy Server Is Listening To ${PORT}`));
