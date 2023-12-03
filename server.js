const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/easy-exchange"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/easy-exchange/index.html"));
});
app.listen(8080);
