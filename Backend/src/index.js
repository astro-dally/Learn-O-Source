const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).send("Testing!!");
});

const voterAuthRoutes = require("./routes/voter/auth");

app.use("/api/voter/auth", voterAuthRoutes);

app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app };

