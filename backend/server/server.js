import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cors  from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true
  }));

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});



// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/organic", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})  
.catch((err) => console.error(err));
