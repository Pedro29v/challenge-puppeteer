const express = require("express");
const { router } = require("./src/routes/index");
const { CORS_URL } = process.env;
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: CORS_URL, credentials: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("server listen on port", port);
});
