require("dotenv").config();

const express = require("express");
const cors = require("cors");

const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Auth API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// echo "# Auth-project" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nagardevendra967-bot/Auth-project.git
// git push -u origin main