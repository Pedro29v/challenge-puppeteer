const express = require("express");
const { router } = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log("server listen on port", 3001);
});
