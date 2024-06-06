
import path from "path";
import express from "express";
import cors from "cors";
import data from "./data.js";
import { fileURLToPath } from "url";

// __dirname is not defined in ES module scope, so you need to recreate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Serve static files from the 'public' and 'dist' directories
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "dist")));

// API endpoint to get products
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// Serve the main HTML file for all other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Start the server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
