const express = require("express");
const app = express();
require("./connections/connect");
const auth = require("./routes/auth");
const listauth = require("./routes/listauth");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", listauth);

app.listen(1000, () => {
  console.log("Server Started");
});
