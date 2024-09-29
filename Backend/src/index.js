const express = require("express");
const cors = require("cors")
const app = express();
const voterAuthRoutes = require("../src/routes/voter/auth");

app.use(cors());
app.use(express.json());
app.use("/api/voter/auth", voterAuthRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


