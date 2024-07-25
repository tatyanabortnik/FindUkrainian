const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const { connectDB } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.use((_req, res) => {
  res.status(404).send('This route does not exist');
});
(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})();

module.exports = app;
