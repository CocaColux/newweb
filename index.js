const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const service = require("./service.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

//app.get("/", (_, res) => {
 // res.sendFile(path.join(__dirname + "/index.html"));
//});

app.get("/", service.test);

app.get("/chores",service.getchores)
app.get("/users", service.getUsers);
app.get("/users/id_user=:Id_User", service. getUsersByID);
app.get("/users/username=:username", service.getUsername);
app.get("/users/firstname=:firstname", service.getFirstName);
app.get("/users/lastname=:lastname", service.getLastName);
app.post("/users", service.createUsers);
app.post("/chores", service.createChore);
app.put("/users/:Id_User", service. updateUser);
app.delete("/chores/:id_chores", service.deleteUser);
app.post("/chores", service.createChore);



app.get("/api/ping", (req, res) => {
  res.send({
    message: "test".repeat(req.query.value),
    value: req.query.value,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});