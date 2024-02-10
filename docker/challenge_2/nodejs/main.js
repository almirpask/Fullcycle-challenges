const express = require("express");
const bodyParser = require("body-parser");
const { connection } = require("./database");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const connected = await connection;
  const [result, fields] = await connected.query("SELECT name FROM people");
  res.render("user", { users: result });
});

app.post("/user", async (req, res) => {
  const name = req.body.name;
  const connected = await connection;
  await connected.query("INSERT INTO people (name) VALUES (?)", [name]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Listening on port" + port);
});
