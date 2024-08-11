import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config.js";

// Initialize Express app
const app = express();
const port =  process.env.port || 5050; // Use environment variable for port or default to 4000

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Connect to database
ConnectDB();

// API endpoints
app.use("/food", foodRouter); // Food related routes
app.use("/images", express.static('uploads')); // Serve uploaded images statically


// Basic endpoint for API check
app.get("/", (req, res) => {
    res.send("API is working");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ error: "Server error" }); // Send a generic error response
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


