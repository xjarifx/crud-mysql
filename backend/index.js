const express = require("express");
const bodyParser = require("body-parser");
const itemsRouter = require("./routers/items.js");
const cors = require("cors");

const app = express();

// Configure CORS for production
const corsOptions = {
  origin: [
    "https://crud-mysql-six.vercel.app",
    "http://localhost:5173", // For local development
    "http://localhost:3000", // For local development
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "CRUD MySQL API is running!", status: "healthy" });
});

app.use("/items", itemsRouter);

// Use dynamic port for cloud deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
