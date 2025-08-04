// config/db.js
require("dotenv").config(); // still okay to call here
const mongoose = require("mongoose");

async function connectDB() {
  const url = process.env.MONGO_URI; // ✅ USE MONGO_URI instead of MONGO_URL
  if (!url) {
    console.error("❌ ERROR: MONGO_URI is missing from .env");
    process.exit(1);
  }

  console.log("MONGO_URI =", url.replace(/:[^:]+@/, ":<PWD>@")); // safe log

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // force IPv4
    });
    console.log("✅ MongoDB connected.");
    mongoose.connection.on("error", e =>
      console.error("MongoDB disconnected:", e)
    );
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
