const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("That you know about node js .... YaY....");
});

app.listen(3000, () => console.log("listen to port 3000"));
