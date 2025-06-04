const express = require("express");
const bodyParser = require("body-parser");
const itemsRouter = require("./routers/items.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/items", itemsRouter);

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
