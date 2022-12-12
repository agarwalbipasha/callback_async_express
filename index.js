const express = require("express");
const app = express();
const port = 3000;
const getData = require("./routers/getData");

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/getData", getData);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
