const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const user = [
  "Rahim",
  "karim",
  "Jasim",
  "Akkas",
  "Rajib",
  "Mowsumi",
  "Sabana",
  "Alomgirs",
];
app.get("/", (req, res) => {
  const fruits = {
    fruit: "banana",
    price: 10000,
  };
  res.send(fruits);
});
app.get("/fruits/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: 1000, price: 10000 });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  const name = user[id];
  res.send({ id, name });
});
app.post("/addUser", (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(4200, () => console.log("listen to port 3000"));
