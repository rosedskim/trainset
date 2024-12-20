const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
const secure = require("ssl-express-www");

let app = express();

app.use(secure);
app.use(history());
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.on("SIGINT", () => process.exit(1));
