require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/db");

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const beritaRoutes = require("./routes/beritaRoutes");
const galeriRoutes = require("./routes/galeriRoutes");
const ppdbRoutes = require("./routes/ppdbRoutes");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/berita", beritaRoutes);
app.use("/api/galeri", galeriRoutes);
app.use("/api/ppdb", ppdbRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("API Pondok Full Day Sunan Ampel");
});

module.exports = app;
