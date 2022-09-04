const express = require("express");
const { router } = require("./src/routes/index");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("server listen on port", port);
});
