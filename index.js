const express = require("express");
const { router } = require("./src/routes/index");
const { CORS_URL } = process.env;
const port = process.env.PORT || 3001;

const app = express();

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", CORS_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET");
});

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("server listen on port", port);
});
