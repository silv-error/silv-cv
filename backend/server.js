import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); // Get the current directory

// Serve static files from the "frontend/dist" directory
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});