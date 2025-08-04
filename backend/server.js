// server.js
require("dotenv").config(); // ✅ Loads .env
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth"); // ✅ Import added

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes); // ✅ Now this works

// app.use("/api/questions", questionRoutes);
// app.use("/api/sessions", sessionRoutes);

// app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
// app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB(); // ✅ MongoDB connection before starting server
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
  });
})();
