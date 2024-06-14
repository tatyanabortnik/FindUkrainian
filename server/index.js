const express = require("express");
const cors = require("cors");
const router = require("./router.js");
const { PORT } = require("./config.js");
const { connectDB } = require("./models/index.js");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((_req, res) => {
  res.status(404).send("This route does not exist");
});

(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})();
