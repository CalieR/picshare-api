const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3002;

app.use("/api", bodyParser.json());
app.get("/api/health/ping", (req, res) => {
  res.send({ result: "pong" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
